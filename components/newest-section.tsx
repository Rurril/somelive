"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Package, Clock, Calendar } from 'lucide-react';

const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const NewestSection = ({ latestPost }) => { // Component name changed to NewestSection
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
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            연애 매거진
          </h2>
          <p className="text-lg text-gray-600">트렌드와 문화를 읽는 새로운 시각</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 왼쪽: 트렌드 배송조회 박스 */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white h-full min-h-[300px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8" />
                  <span className="text-lg font-bold">트렌드</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 leading-tight">
                  배송 조회
                </h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  매일 아침 새로운 트렌드를<br />
                  배달해 드려요.
                </p>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                  <span className="font-semibold">확인하기</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </div>

          {/* 중앙: 최신 글 */}
          <div className="lg:col-span-6">
            {latestPost ? (
              <Link href={`/posts/${slugify(latestPost.title)}`} className="group relative h-full block">
                <div className="relative overflow-hidden rounded-2xl bg-white h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={latestPost.image || '/placeholder.svg'}
                      alt={latestPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {latestPost.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        NEW
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-500">{latestPost.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {latestPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3">
                      {latestPost.description.split("<br/><br/>")[1] || latestPost.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                        <span>자세히 보기</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-100 rounded-2xl"><p>최신 글을 불러오는 중...</p></div>
            )}
          </div>

          {/* 오른쪽: 예정 글 스포일러 */}
          <div className="lg:col-span-3">
            <div className="group relative h-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 h-full min-h-[300px] text-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
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
                      <Clock size={16} className="text-orange-400" />
                      <span className="text-xs text-orange-400 font-semibold">다음 예정</span>
                    </div>
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold animate-bounce">
                      {upcomingPost.status}
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="text-lg font-bold mb-3 leading-tight line-clamp-3 group-hover:text-orange-300 transition-colors">
                      {upcomingPost.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {upcomingPost.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{upcomingPost.date}</span>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors">
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>모든 매거진 보기</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};