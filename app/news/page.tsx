"use client";

import { useState } from "react";
import { ExternalLink, ChevronUp, ChevronDown, Search } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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

const NewsItem = ({ item, isExpanded, onToggle, onLinkClick }) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <div
      className="py-8 cursor-pointer hover:bg-gray-50 transition-colors"
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
        <div className="space-y-4 ml-4 pl-6 border-l-2 border-orange-100">
          {item.news.map((newsItem, index) => (
            <div key={index} className="group">
              <a 
                href={newsItem.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start justify-between gap-4"
                onClick={onLinkClick}
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 leading-relaxed group-hover:text-orange-600 transition-colors">
                    {newsItem.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 inline-block">
                    {newsItem.category}
                  </span>
                </div>
                <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function NewsPage() {
  const [expandedItems, setExpandedItems] = useState({ 1: true });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevents the parent div's onClick from firing
  };

  // Filter news items based on the search query
  const filteredNewsItems = newsItems
    .map(item => {
      const filteredNews = item.news.filter(newsItem =>
        newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Return the item only if it contains matching news articles
      if (filteredNews.length > 0) {
        return { ...item, news: filteredNews };
      }
      return null;
    })
    .filter(Boolean); // Removes any null items from the array

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Header />
      <div className="bg-orange-500 text-white py-1">
        <p className="text-xs text-center font-medium">✨ 매일 아침 업데이트되는 뉴스 큐레이션</p>
      </div>

      {/* Header section with a more visual design */}
      <header className="bg-neutral-800 text-white py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">뉴스클리핑</h1>
            <p className="mt-2 text-neutral-400 max-w-lg">매일 아침 읽어야 하는 캐릿 추천 기사 읽기</p>
          </div>
          {/* We can place a user profile or other elements here if needed */}
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Search Input section */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="다시 읽고 싶은 뉴스가 있나요?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-4 px-6 pr-12 rounded-full border-2 border-gray-200 focus:outline-none focus:border-orange-500 text-sm md:text-base placeholder-gray-400 transition-colors"
            />
            <Search className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Display filtered news items */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {filteredNewsItems.length > 0 ? (
            filteredNewsItems.map((item) => (
              <NewsItem
                key={item.id}
                item={item}
                isExpanded={expandedItems[item.id] || searchQuery.length > 0} // Always expand search results
                onToggle={() => toggleExpanded(item.id)}
                onLinkClick={handleLinkClick}
              />
            ))
          ) : (
            <div className="p-12 text-center text-gray-500">
              <p>🔍 검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
        
        {/* '더 많은 뉴스 보기' button */}
        <div className="text-center mt-8">
          <button className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-medium">
            더 많은 뉴스 보기
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}