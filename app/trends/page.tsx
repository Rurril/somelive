"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search, Bookmark, Filter, Grid, List, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

const trendItems = [
  {
    id: 1,
    category: "연애 트렌드",
    title: "가치관 데이트가 MZ세대 사이에서 폭발적 인기, 기존 만남 방식 변화 이끌어",
    description: "외모나 조건보다 내면의 가치관을 중시하는 새로운 연애 문화 확산",
    date: "2024.09.19",
    change: "+156%",
    changeType: "up",
    tags: ["가치관", "데이트", "MZ세대"],
    isHot: true,
    satisfaction: "94.2%"
  },
  {
    id: 2,
    category: "심리 테스트",
    title: "애착유형 테스트로 알아보는 나의 연애 패턴, 건강한 관계 맺기 열풍",
    description: "자신의 애착 스타일을 파악해 더 나은 연애를 추구하는 사람들 증가",
    date: "2024.09.18",
    change: "+80%",
    changeType: "up",
    tags: ["애착유형", "심리테스트", "관계"],
    isHot: false,
    satisfaction: "87.5%"
  },
  {
    id: 3,
    category: "연애 기술",
    title: "MBTI 궁합 의존도 감소, '실제 대화'를 통한 궁합 확인이 대세",
    description: "성격 유형보다 직접적인 소통을 중시하는 연애 패턴으로 변화",
    date: "2024.09.17",
    change: "-15%",
    changeType: "down",
    tags: ["MBTI", "궁합", "소통"],
    isHot: false,
    satisfaction: "72.1%"
  },
  {
    id: 4,
    category: "데이트 문화",
    title: "취미공유데이트의 부상, 함께 성장하는 커플 관계 추구",
    description: "단순한 식사보다 함께 배우고 경험할 수 있는 활동 선호 증가",
    date: "2024.09.16",
    change: "+67%",
    changeType: "up",
    tags: ["취미", "공유", "성장"],
    isHot: true,
    satisfaction: "91.3%"
  },
  {
    id: 5,
    category: "AI 연애",
    title: "AI 연애 코칭 서비스 급성장, 개인 맞춤형 조언으로 연애 성공률 향상",
    description: "인공지능을 활용한 개인별 연애 상담과 코칭 서비스 각광",
    date: "2024.09.15",
    change: "+125%",
    changeType: "up",
    tags: ["AI", "코칭", "맞춤형"],
    isHot: true,
    satisfaction: "89.7%"
  },
  {
    id: 6,
    category: "관계 심리",
    title: "감정일기공유 커플들이 늘어나는 이유, 깊이 있는 소통의 중요성",
    description: "서로의 감정을 기록하고 공유하며 관계의 깊이를 더하는 새로운 트렌드",
    date: "2024.09.14",
    change: "+43%",
    changeType: "up",
    tags: ["감정일기", "소통", "공유"],
    isHot: false,
    satisfaction: "85.9%"
  },
  {
    id: 7,
    category: "데이트 문화",
    title: "미니멀데이트 트렌드, 소소하지만 의미 있는 만남이 대세",
    description: "과도한 소비 없이도 충분히 행복한 데이트를 추구하는 문화 확산",
    date: "2024.09.13",
    change: "+38%",
    changeType: "up",
    tags: ["미니멀", "소소함", "의미"],
    isHot: false,
    satisfaction: "88.4%"
  },
  {
    id: 8,
    category: "연애 트렌드",
    title: "셀프소개팅 앱 이용률 급증, 스스로 찾는 이상형 만남",
    description: "주변 소개보다 본인이 직접 상대방을 찾아 만나는 방식 선호",
    date: "2024.09.12",
    change: "+92%",
    changeType: "up",
    tags: ["셀프소개팅", "앱", "주도성"],
    isHot: true,
    satisfaction: "82.6%"
  },
  {
    id: 9,
    category: "라이프스타일",
    title: "비건데이트의 인기 상승, 가치관이 맞는 사람과의 만남 추구",
    description: "환경과 건강을 중시하는 가치관을 공유하는 커플들의 새로운 데이트 스타일",
    date: "2024.09.11",
    change: "+28%",
    changeType: "up",
    tags: ["비건", "환경", "가치관"],
    isHot: false,
    satisfaction: "90.1%"
  },
  {
    id: 10,
    category: "문화 생활",
    title: "북데이트가 밀레니얼 세대에서 재조명받는 이유",
    description: "함께 책을 읽고 토론하며 지적 교감을 나누는 데이트의 재부상",
    date: "2024.09.10",
    change: "+56%",
    changeType: "up",
    tags: ["독서", "토론", "지적교감"],
    isHot: false,
    satisfaction: "86.3%"
  },
  {
    id: 11,
    category: "소셜 트렌드",
    title: "관계팝업스토어 체험하는 커플들, 새로운 경험 공유 문화",
    description: "팝업스토어를 함께 방문하며 트렌드를 공유하고 새로운 경험을 쌓는 데이트",
    date: "2024.09.09",
    change: "+71%",
    changeType: "up",
    tags: ["팝업스토어", "경험", "트렌드"],
    isHot: false,
    satisfaction: "83.8%"
  },
  {
    id: 12,
    category: "연애 심리",
    title: "연애에서 '진정성'을 찾는 세대, SNS 과시보다 진심 어린 관계 추구",
    description: "겉으로 드러내는 화려함보다 진솔한 감정 교류를 중시하는 연애관 확산",
    date: "2024.09.08",
    change: "+104%",
    changeType: "up",
    tags: ["진정성", "진심", "관계"],
    isHot: true,
    satisfaction: "93.5%"
  }
];

const categories = ["전체", "연애 트렌드", "심리 테스트", "연애 기술", "데이트 문화", "AI 연애", "관계 심리", "라이프스타일", "문화 생활", "소셜 트렌드", "연애 심리"];

const Header = () => (
  <header className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
              Trend Report
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">연애 트렌드 리포트</h1>
          <p className="text-gray-600 mt-2">MZ세대의 연애 문화와 최신 트렌드를 분석한 인사이트 리포트</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="hot" className="rounded border-gray-300" />
            <label htmlFor="hot" className="text-sm text-gray-600">🔥 HOT</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="rising" className="rounded border-gray-300" />
            <label htmlFor="rising" className="text-sm text-gray-600">📈 상승</label>
          </div>
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <option>최신순</option>
            <option>인기순</option>
            <option>상승률순</option>
          </select>
        </div>
      </div>
    </div>
  </header>
);

const TrendCard = ({ item }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div className="text-xs font-medium text-blue-400 mb-2">{item.category.toUpperCase()}</div>
          <div className="flex items-center justify-center gap-2 text-sm">
            {item.changeType === 'up' ? (
              <ArrowUp className="w-4 h-4 text-green-400" />
            ) : (
              <ArrowDown className="w-4 h-4 text-red-400" />
            )}
            <span className={item.changeType === 'up' ? 'text-green-400' : 'text-red-400'}>
              {item.change}
            </span>
          </div>
        </div>
      </div>
      {item.isHot && (
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
          🔥 HOT
        </div>
      )}
      <div className="absolute bottom-3 right-3 text-white opacity-75">
        <Bookmark className="w-4 h-4" />
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">
        {item.title}
      </h3>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {item.description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{item.date}</span>
        <div className="flex items-center gap-4">
          <span className="text-xs">만족도 {item.satisfaction}</span>
          <Bookmark className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {item.tags?.slice(0, 3).map((tag, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="border-b border-gray-100 mb-8">
    <div className="flex items-center gap-6 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`whitespace-nowrap pb-4 px-2 text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

const StatsSection = () => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4">주간 트렌드 요약</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-500">+156%</div>
        <div className="text-sm text-gray-600">가치관 데이트</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">+125%</div>
        <div className="text-sm text-gray-600">AI 연애 코칭</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-500">+104%</div>
        <div className="text-sm text-gray-600">진정성 추구</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-500">+92%</div>
        <div className="text-sm text-gray-600">셀프소개팅</div>
      </div>
    </div>
  </div>
);

export default function TrendReportPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [viewMode, setViewMode] = useState("grid");

  const filteredItems = activeCategory === "전체" 
    ? trendItems 
    : trendItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <StatsSection />
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            총 <span className="font-medium text-gray-900">{filteredItems.length}</span>개의 트렌드 리포트
          </p>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredItems.map((item) => (
            <TrendCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            더 많은 트렌드 보기
          </button>
        </div>
      </main>
    </div>
  );
}