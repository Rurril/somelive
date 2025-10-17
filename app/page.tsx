import { Header } from "@/components/header"
import { CategorySection } from "@/components/category-section"
import { CultureTrend } from "@/components/culture-trend"
import { LatestPosts } from "@/components/latest-posts"
import { NewestSection } from "@/components/newest-section"
import { Footer } from "@/components/footer"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "@/lib/firebase"

async function getLatestPosts() {
  try {
    const trendsCollection = collection(db, "trends");
    const q = query(trendsCollection, orderBy("date", "desc"), limit(20));
    const querySnapshot = await getDocs(q);
    const allRecentPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const filteredPosts = allRecentPosts.filter(post => post.category !== "데이트 문화");
    return filteredPosts.slice(0, 4);
  } catch (error) {
    console.error("Error fetching latest posts: ", error);
    return [];
  }
}

async function getCultureTrends() {
  try {
    const trendsCollection = collection(db, "trends");
    const q = query(trendsCollection, where("category", "==", "데이트 문화"), orderBy("date", "desc"), limit(4));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return posts;
  } catch (error) {
    console.error("Error fetching culture trends: ", error);
    return [];
  }
}

async function getMagazinePost() {
  try {
    const trendsCollection = collection(db, "trends");
    const q = query(trendsCollection, orderBy("date", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const post = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
    return post;
  } catch (error) {
    console.error("Error fetching magazine post: ", error);
    return null;
  }
}

export default async function Home() {
  const latestPosts = await getLatestPosts();
  const cultureTrends = await getCultureTrends();
  const magazinePost = await getMagazinePost();

  return (
    <main className="min-h-screen">
      <Header />
      <LatestPosts posts={latestPosts} />
      <NewestSection latestPost={magazinePost} />
      <CultureTrend posts={cultureTrends} />
      {/* <CategorySection /> */}
      {/* 카테고리 섹션은 좀 디벨롭해서 다시 추가하자. 현재에 디자인에 잘 맞지도 않음... */}
      <Footer />
    </main>
  )
}