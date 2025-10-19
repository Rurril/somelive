import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import TrendReportClient from "@/components/trends-client";

async function getTrends() {
  try {
    const trendsCollection = collection(db, "trends");
    const q = query(trendsCollection);
    const querySnapshot = await getDocs(q);
    const trends = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const date = data.date;
      let dateString = '';

      if (date && typeof date.seconds === 'number') {
        // Convert Firestore Timestamp to YYYY.MM.DD string
        const d = new Date(date.seconds * 1000);
        dateString = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
      } else if (typeof date === 'string') {
        // Use the existing string date
        dateString = date;
      }

      return {
        ...data,
        id: doc.id, // Pass document ID for key prop
        date: dateString,
      };
    });
    return trends;
  } catch (error) {
    console.error("Error fetching trends: ", error);
    return []; // Return an empty array on error
  }
}

export default async function TrendReportPage() {
  const trendItems = await getTrends();

  return (
    <main className="min-h-screen">
      <Header />
      <TrendReportClient trendItems={trendItems} />
      <Footer />
    </main>
  );
}