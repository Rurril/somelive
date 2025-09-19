"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search, ExternalLink } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "2025.09.19",
    day: "금요일",
    isToday: true,
    news: [
      {
        title: "MZ '움레상' 유행에... 올리브유, 치킨 제치고 검색 1위",
        category: "생활",
        url: "https://example.com/news1"
      },
      {
        title: "지고재, 3544 고객 거래액 134%↗",
        category: "경제",
        url: "https://example.com/news2"
      },
      {
        title: "1년 만에 2000개가 넘는 북클럽이 생겼다? 또 다른 북클럽 트렌드",
        category: "문화",
        url: "https://example.com/news3"
      }
    ]
  },
  {
    id: 2,
    date: "2025.09.18",
    day: "목요일",
    isToday: false,
    news: [
      {
        title: "맘샷, 베이프... 가을 한정 푸드, 굿즈 신변인 스타벅스",
        category: "생활",
        url: "https://example.com/news4"
      },
      {
        title: "한컴버스, 오늘 정식 운항 시작...금쪽은 다음 달 10일부터",
        category: "교통",
        url: "https://example.com/news5"
      },
      {
        title: "'서울만 생각하면 눈물이 나'...'서울병'을 아시나요?",
        category: "사회",
        url: "https://example.com/news6"
      }
    ]
  }
];

const Header = () => (
  <header className="bg-white border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">뉴스클리핑</h1>
            <p className="text-sm text-gray-600 mt-1">매일 아침 읽어야 하는 게럿 추천 기사 읽기</p>
          </div>
          <span className="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-1 rounded">
            News clipping
          </span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="다시 읽고 싶은 뉴스가 있나요?"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  </header>
);

const NewsItem = ({ item, isExpanded, onToggle }) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <div
      className="py-6 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">{item.date}</span>
              <span className="text-xs text-gray-500">{item.day}</span>
              {item.isToday && (
                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">
                  TODAY
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {item.news.length}개 기사
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>
    </div>
    
    {isExpanded && (
      <div className="pb-6">
        <div className="space-y-4 ml-4 pl-4 border-l-2 border-orange-100">
          {item.news.map((newsItem, index) => (
            <div key={index} className="group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 leading-relaxed group-hover:text-orange-600 transition-colors">
                    {newsItem.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 inline-block">
                    {newsItem.category}
                  </span>
                </div>
                <div className="text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function NewsPage() {
  const [expandedItems, setExpandedItems] = useState({ 1: true }); // 첫 번째 아이템은 기본으로 열려있음

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {newsItems.map((item) => (
            <NewsItem
              key={item.id}
              item={item}
              isExpanded={expandedItems[item.id]}
              onToggle={() => toggleExpanded(item.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
            더 많은 뉴스 보기
          </button>
        </div>
      </main>
    </div>
  );
}