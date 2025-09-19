"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 최신 글 데이터 (실제 프로젝트에서는 API fetch로 교체)
const posts = [
  {
    id: 1,
    slug: "first-post-title",
    title: "첫 번째 글 제목",
    summary: "독립은 어렵고 자취방은 좁으니...",
    thumbnail: "/couple-having-deep-conversation-at-cafe.jpg",
  },
  {
    id: 2,
    slug: "second-post-title",
    title: "두 번째 글 제목",
    summary: "집보다 더 나를 표현할 수 있는 공간...",
    thumbnail: "/happy-couple-in-cozy-cafe-warm-lighting-romantic-a.jpg",
  },
  {
    id: 3,
    slug: "third-post-title",
    title: "세 번째 글 제목",
    summary: "혼자보다 함께할 때 더 즐거운...",
    thumbnail: "/modern-dating-trends-illustration-young-people-lif.jpg",
  },
  {
    id: 4,
    slug: "fourth-post-title",
    title: "네 번째 글 제목",
    summary: "따뜻한 공간, 에고플레이스...",
    thumbnail: "/trendy-restaurant-interior-korean-style-modern-dat.jpg",
  },
];

export function LatestPosts() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#FAFAFA] text-[#333333]">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-latest",
            prevEl: ".swiper-button-prev-latest",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-latest",
            type: "fraction",
          }}
          loop={true}
          slidesPerView={1}
          className="w-full relative"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 px-8">
                {/* Summary (왼쪽) */}
                <div className="text-center lg:text-right text-3xl font-extrabold leading-tight text-[#333333]">
                  <p>"{post.summary}"</p>
                </div>

                {/* Thumbnail (가운데) */}
                <div className="flex justify-center">
                  <div className="relative w-[400px] h-[280px] rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title (오른쪽) */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#333333]">{post.title}</h3>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-[#FF6B6B] hover:underline text-sm"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>

              {/* 페이지 인덱스 - Swiper 기본 pagination 사용 */}
              {/* <div className="text-center text-sm text-gray-500 mt-6">
                {String(index + 1).padStart(2, "0")}/
                {String(posts.length).padStart(2, "0")}
              </div> */}
            </SwiperSlide>
          ))}
          {/* Custom Navigation and Pagination */}
          <div className="absolute bottom-0 right-0 flex items-center gap-4 p-4 z-10">
            <button className="swiper-button-prev-latest p-2 rounded-full bg-gray-200 text-[#333333] hover:bg-gray-300 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="swiper-pagination-latest text-[#333333] text-sm font-mono"></div>
            <button className="swiper-button-next-latest p-2 rounded-full bg-gray-200 text-[#333333] hover:bg-gray-300 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}