"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Helper function to generate URL-friendly slugs
const slugify = (text) => {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const categories = ["전체", "연애 트렌드", "심리 테스트", "연애 기술", "데이트 문화", "AI 연애", "관계 심리"];

const Header = () => (
  <header className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight lg:text-5xl">연애 트렌드 리포트</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        MZ세대의 연애 문화와 최신 트렌드를 분석하여 깊이 있는 인사이트를 제공합니다.
      </p>
    </div>
  </header>
);

const TrendCard = ({ item }) => (
  <Card className="overflow-hidden h-full flex flex-col group border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <CardHeader className="p-0">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {item.isHot && (
          <Badge variant="destructive" className="absolute top-3 right-3">🔥 HOT</Badge>
        )}
      </div>
    </CardHeader>
    
    <CardContent className="p-6 flex-grow">
      <p className="text-sm font-medium text-orange-600 mb-2">{item.category}</p>
      <CardTitle className="text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-2">
        {item.title}
      </CardTitle>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.description }} />
    </CardContent>
    
    <CardFooter className="p-6 bg-gray-50/50 flex items-center justify-between text-sm text-gray-500">
      <span>{item.date}</span>
      <div className="flex items-center gap-2 font-semibold">
        {item.changeType === 'up' ? (
          <ArrowUp className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDown className="w-4 h-4 text-red-500" />
        )}
        <span className={item.changeType === 'up' ? 'text-green-500' : 'text-red-500'}>
          {item.change}
        </span>
      </div>
    </CardFooter>
  </Card>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="border-b border-gray-200 mb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 -mb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap py-3 px-4 text-sm font-semibold rounded-t-lg transition-colors ${
              activeCategory === category
                ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function TrendReportClient({ trendItems }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      return categoryParam;
    }
    return "전체";
  });

  const filteredItems = activeCategory === "전체" 
    ? trendItems 
    : trendItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {filteredItems && filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
                <Link key={item.id || item.title} href={`/posts/${slugify(item.title)}`} className="block">
                <TrendCard item={item} />
                </Link>
            ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <p className="text-gray-500">표시할 트렌드 리포트가 없습니다.</p>
                <p className="text-sm text-gray-400 mt-2">Firebase 설정을 확인하거나 데이터베이스를 채워주세요.</p>
            </div>
        )}
        
        <div className="text-center mt-16">
          <button className="bg-white border border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-all shadow-sm">
            더 많은 트렌드 보기
          </button>
        </div>
      </main>
    </div>
  );
}