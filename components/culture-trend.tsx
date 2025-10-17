"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Heart, Zap, Calendar, Eye } from "lucide-react"
import Link from "next/link"

const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export function CultureTrend({ posts }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visiblePosts, setVisiblePosts] = useState(3)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !posts || posts.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + visiblePosts >= posts.length ? 0 : prev + 1))
    }, 4000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying, posts, visiblePosts])

  // Responsive slides per view
  useEffect(() => {
    const updateVisiblePosts = () => {
      if (window.innerWidth >= 1024) setVisiblePosts(3)
      else if (window.innerWidth >= 768) setVisiblePosts(2)
      else setVisiblePosts(1)
    }

    updateVisiblePosts()
    window.addEventListener('resize', updateVisiblePosts)
    return () => window.removeEventListener('resize', updateVisiblePosts)
  }, [])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + visiblePosts >= posts.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 < 0 ? Math.max(0, posts.length - visiblePosts) : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-violet-400 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-violet-300 to-blue-400 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 text-violet-500 animate-spin" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Culture Trend</span>
                <Heart className="w-4 h-4 text-pink-500" />
              </div>
            </div>
            <h2 className="text-3xl md:text-2xl font-black bg-gradient-to-r from-violet-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              요즘에는 💜
            </h2>            
          </div>
          
          <Link 
            href={{ pathname: '/trends', query: { category: '데이트 문화' } }} 
            className="group mt-6 md:mt-0 flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>더보기</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {posts && posts.length > 0 ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / visiblePosts)}%)` }}
              >
                {posts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / visiblePosts}%` }}
                  >
                    <Link href={`/posts/${slugify(post.title)}`} className="group block h-full">
                      <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                        
                        {/* Image Section */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                          
                          {/* Trending badge
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            TRENDING 🔥
                          </div> */}
                          
                          {/* Category badge */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                            {post.category}
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-grow space-y-4">
                          {/* Meta info */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5 text-pink-400" />
                              <span className="text-xs text-pink-500 font-medium">HOT</span>
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 leading-tight flex-grow line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          {/* Description */}
                          <p 
                            className="text-sm text-gray-600 line-clamp-2 leading-relaxed" 
                            dangerouslySetInnerHTML={{ 
                              __html: post.description.split("<br/><br/>")[1] || post.description 
                            }} 
                          />
                          
                          {/* Read more */}
                          <div className="pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                              <span className="text-violet-500 text-sm font-semibold group-hover:text-violet-600">
                                자세히 보기 →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg p-3 hover:bg-white hover:scale-110 transition-all duration-300 z-10 hidden lg:block border border-white/30"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg p-3 hover:bg-white hover:scale-110 transition-all duration-300 z-10 hidden lg:block border border-white/30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm p-12 border border-white/30 shadow-lg max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 text-lg font-semibold mb-2">아직 준비중이에요! 🚀</p>
              <p className="text-sm text-gray-500">곧 멋진 문화 트렌드를 만나보세요</p>
            </div>
          </div>
        )}

        {/* Dot Indicators */}
        {posts && posts.length > 0 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: Math.ceil(posts.length / visiblePosts) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / visiblePosts) === idx 
                    ? "w-8 bg-gradient-to-r from-violet-500 to-pink-500 shadow-lg" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Bottom decorative text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-medium">
            매일 새로운 트렌드가 업데이트됩니다 ✨
          </p>
        </div>
      </div>
    </section>
  )
}