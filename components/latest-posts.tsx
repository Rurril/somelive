
"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, Zap, Heart, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const slugify = (text: string) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export function LatestPosts({ posts }: { posts: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  if (!posts || posts.length === 0) {
    return (
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-gray-600 text-lg">아직 멋진 콘텐츠를 준비중이에요! 🚀</p>
          </div>
        </div>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentSlide];

  return (
    <section className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white transition-all duration-1000" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <Sparkles className="w-4 h-4 text-purple-500 animate-spin" />
            <span className="text-sm font-bold text-gray-700">LATEST DROPS</span>
            <Zap className="w-4 h-4 text-yellow-500" />
          </div>        
        </div>

        {/* Main Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 items-center gap-8 px-8 min-h-[400px]">
            {/* Summary (왼쪽) */}
            <div className="text-center lg:text-right space-y-4 transform transition-all duration-500 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-6 border border-white/30 shadow-lg">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preview</span>
                  </div>
                  <blockquote className="text-xl md:text-xl font-bold leading-tight text-gray-800 whitespace-pre-wrap">
                    "{currentPost.previewText || currentPost.description.substring(0, 50)}..."
                  </blockquote>
                  <div className="flex items-center justify-center lg:justify-end mt-4 gap-2">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-sm text-gray-600">#{currentSlide + 1} trending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail (가운데) */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur opacity-25 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                <Link href={`/posts/${slugify(currentPost.title)}`} className="relative w-[400px] h-[300px] overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 block">
                  <img
                    src={currentPost.image || "/placeholder.svg"}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-lg">HOT 🔥</div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-black/60 backdrop-blur-sm text-white p-3">
                      <p className="text-sm font-medium">{currentPost.category}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Title & CTA (오른쪽) */}
            <div className="text-center lg:text-left space-y-6 transform transition-all duration-500 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 blur opacity-20 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-6 border border-white/30 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 text-gray-900 leading-tight line-clamp-3">{currentPost.title}</h3>
                  <Link href={`/posts/${slugify(currentPost.title)}`} className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:bg-gray-700 shadow-lg">
                    <span>지금 읽어보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
            <Link href={`/posts/${slugify(currentPost.title)}`}>
              <img
                src={currentPost.image || "/placeholder.svg"}
                alt={currentPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-sm">{currentPost.category}</Badge>
                  <p className="text-xs font-mono">{formatDate(currentPost.date)}</p>
                </div>
                <h3 className="text-2xl font-bold leading-tight line-clamp-3">{currentPost.title}</h3>
              </div>
            </Link>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 right-0 flex items-center gap-4 z-20 lg:bottom-0">
            <button onClick={prevSlide} className="group p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30">
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/30">
              <span className="text-sm font-black text-gray-800 font-mono">
                {String(currentSlide + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}
              </span>
            </div>
            <button onClick={nextSlide} className="group p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30">
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? "w-8 h-2 bg-gradient-to-r from-pink-500 to-purple-600" 
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm font-medium">
            매주 업데이트되는 핫한 콘텐츠 ✨ 놓치지 마세요!
          </p>
        </div>
      </div>
    </section>
  );
}
