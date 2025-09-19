import { Header } from "@/components/header"
import { NewHeroSection } from "@/components/new-hero-section"
import { CategorySection } from "@/components/category-section"
import { NewFeaturedArticles } from "@/components/new-featured-articles"
import { LatestPosts } from "@/components/latest-posts"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewHeroSection />
      <LatestPosts />
      <NewFeaturedArticles />
      <CategorySection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
