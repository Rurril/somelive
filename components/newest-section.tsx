
"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Package, Clock, Calendar, Sparkles, Zap, Heart } from 'lucide-react';

const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const NewestSection = ({ latestPost }) => {
  // 하드코딩된 데이터 (오른쪽 카드)
  const upcomingPost = {
    id: 2,
    title: "SNS에서 바이럴되는 마케팅 특징 정리해 드림, 이주의 일 잘한 브랜드 6",
    category: "마케팅 트렌드",
    date: "2025.09.22",
    image: "/couple-psychology-test-illustration-modern-design.jpg",
    description: "다음 주 공개 예정인 마케팅 성공 사례들을 미리 살펴보세요.",
    status: "D-day!"
  };

  return (
    <section className="w-full py-12 md:py-16 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-200 to-pink-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-pink-200 to-purple-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-200 to-orange-300 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-4">
            <Sparkles className="w-4 h-4 text-purple-500 animate-spin" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Featured</span>
            <Heart className="w-4 h-4 text-pink-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            트렌드를 찾아볼 때는?
          </h2>        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 왼쪽: 트렌드 배송조회 박스 */}
          <div className="lg:col-span-3">
            <div className="group relative bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white h-full min-h-[300px] flex flex-col justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 group-hover:animate-bounce" />
                  <span className="text-lg font-bold">트렌드</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 leading-tight">
                  배송 조회
                </h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  매일 아침 새로운 트렌드를<br />
                  배달해 드려요.
                </p>
                <button className="group/btn flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/20">
                  <span className="font-semibold">확인하기</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-sm"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* 중앙: 최신 글 */}
          <div className="lg:col-span-6">
            {latestPost ? (
              <Link href={`/posts/${slugify(latestPost.title)}`} className="group relative h-full block">
                <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                  
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={latestPost.image || '/placeholder.svg'}
                      alt={latestPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                    
                    {/* Enhanced badges */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {latestPost.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        <Zap className="w-3 h-3" />
                        NEW
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium">{latestPost.date}</span>
                      <div className="ml-auto flex items-center gap-1">
                        <Heart className="w-3 h-3 text-pink-400" />
                        <span className="text-xs text-pink-500 font-medium">HOT</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {latestPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3">
                      {latestPost.description.split("<br/><br/>")[1] || latestPost.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:text-pink-500 transition-colors">
                          <span>자세히 보기</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="h-full flex items-center justify-center bg-white/80 backdrop-blur-sm border border-white/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <p className="text-gray-600 font-medium">최신 글을 불러오는 중...</p>
                </div>
              </div>
            )}
          </div>

          {/* 오른쪽: 예정 글 스포일러 */}
          <div className="lg:col-span-3">
            <div className="group relative h-full">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-full min-h-[300px] text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-700">
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30"></div>
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={upcomingPost.image}
                    alt={upcomingPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-orange-400 group-hover:animate-pulse" />
                      <span className="text-xs text-orange-400 font-semibold">다음 예정</span>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                      {upcomingPost.status}
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="text-lg font-bold mb-3 leading-tight line-clamp-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                      {upcomingPost.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {upcomingPost.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">{upcomingPost.date}</span>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors p-1 hover:scale-110">
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>모든 매거진 보기</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
