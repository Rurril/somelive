import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import TrendReportClient from "@/components/trends-client";

async function getTrends() {
  try {
    const trendsCollection = collection(db, "trends");
    const q = query(trendsCollection, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    const trends = querySnapshot.docs.map(doc => ({
      // The document ID is not needed here, but you can get it with doc.id
      ...doc.data()
    }));
    return trends;
  } catch (error) {
    console.error("Error fetching trends: ", error);
    return []; // Return an empty array on error
  }
}

export default async function TrendReportPage() {
  const trendItems = await getTrends();

  return <TrendReportClient trendItems={trendItems} />;
}