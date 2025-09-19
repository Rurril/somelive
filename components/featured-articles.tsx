"use client"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const allPosts = [
  {
    id: 1,
    slug: "trend-shipping-tracking",
    title: "트렌드 배송 조회",
    description: "매일 아침 새로운 트렌드를 배달해 드려요.",
    tag: "트렌드",
    date: "2025.09.19",
    bg: "bg-black text-white",
  },
  {
    id: 2,
    slug: "character-follower-growth",
    title: "한 달 만에 팔로워 3배 증가한 캐릭터는?",
    description: "팬층 두터운 의외의 인기 IP 모음",
    tag: "유행예감",
    date: "2025.09.19",
    image: "/modern-dating-trends-illustration-young-people-lif.jpg",
  },
  {
    id: 3,
    slug: "viral-marketing-features",
    title: "SNS에서 바이럴되는 마케팅 특징 정리해 드림",
    description: "이주의 일 잘한 브랜드 6",
    tag: "브랜드 분석",
    date: "2025.09.22",
    image: "/couple-psychology-test-illustration-modern-design.jpg",
  },
  {
    id: 4,
    slug: "next-week-consumer-trends",
    title: "다음 주 주목해야 할 소비 트렌드",
    description: "D-day 2",
    tag: "트렌드 분석",
    date: "2025.09.23",
    image: "/trendy-restaurant-interior-korean-style-modern-dat.jpg",
  },
  {
    id: 5,
    slug: "ai-dating-app-review",
    title: "AI가 찾아주는 운명의 상대? 데이터로 보는 소개팅 앱",
    description: "알고리즘은 사랑을 알고 있을까? AI 추천부터 매칭까지, 최신 소개팅 앱의 모든 것을 파헤쳐봅니다.",
    tag: "기술",
    date: "2024.07.18",
    image: "/modern-dating-app-interface-with-ai-features.jpg",
  },
]

const fixedPost = allPosts[0];
const sliderPosts = allPosts.slice(1);

export function FeaturedArticles() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    drag: true,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(timer)
  }, [instanceRef])

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter font-sans">
            Weekly Magazine
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            데이터와 문화로 읽는 Z세대의 연애, 지금 가장 핫한 이야기들을 만나보세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-6">
          {/* Fixed Card */}
          <div className="lg:col-span-1 hidden lg:block">
             <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/3] flex flex-col items-center justify-center text-center p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-orange-500">트렌드</span>
                  <span> 배송 조회</span>
                </h3>
                <p className="text-sm text-white font-bold">{fixedPost.description}</p>
             </div>
          </div>

          {/* Slider */}
          <div className="lg:col-span-2 relative">
            <div ref={sliderRef} className="keen-slider">
              {sliderPosts.map((post) => (
                <div key={post.id} className="keen-slider__slide">
                  <Link href={`/posts/${post.slug}`} className="group block h-full">
                    <div className="relative overflow-hidden rounded-lg bg-gray-900 h-full flex flex-col">
                      <div className={`relative aspect-[4/3] w-full overflow-hidden ${post.bg || ""}`}>
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-4">
                            <span className="text-2xl font-bold text-center text-white">{post.title}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-[#FF4D88] text-white border-none">{post.tag}</Badge>
                          <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold font-sans tracking-tight mb-2 flex-grow">{post.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-2">{post.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slim Bar Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {sliderPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-1 rounded-full transition-all ${
                currentSlide === idx ? "w-8 bg-white" : "w-4 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}