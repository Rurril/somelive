import { MapPin, BrainCircuit, MessageCircleQuestion, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    icon: MapPin,
    title: "데이트 코스",
    description: "이번 주말, 여기 어때요?",
    gradient: "from-pink-500 via-red-500 to-orange-500",
    bgGradient: "from-pink-50 to-red-50",
    borderGradient: "from-pink-200 to-red-200",
    emoji: "🗺️",
    href: "#",
  },
  {
    icon: BrainCircuit,
    title: "연애 심리 테스트",
    description: "나는 어떤 연애 스타일일까?",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderGradient: "from-emerald-200 to-teal-200",
    emoji: "🧠",
    href: "#",
  },
  {
    icon: MessageCircleQuestion,
    title: "고민 상담소",
    description: "다른 사람들은 어떻게 생각해?",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    bgGradient: "from-purple-50 to-violet-50",
    borderGradient: "from-purple-200 to-violet-200",
    emoji: "💭",
    href: "#",
  },
  {
    icon: Sparkles,
    title: "최신 트렌드",
    description: "MBTI는 끝났다! 새로운 궁합 트렌드",
    gradient: "from-yellow-500 via-pink-500 to-purple-500",
    bgGradient: "from-yellow-50 to-pink-50",
    borderGradient: "from-yellow-200 to-pink-200",
    emoji: "✨",
    href: "/trends",
  },
]

export function CategorySection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-200 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-600">카테고리 탐색</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="block text-gray-800 mb-2">어떤 걸</span>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              찾고 있나요?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            연애부터 데이트까지, 
            <span className="font-medium text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
              {" "}당신의 로맨틱한 순간
            </span>
            을 더 특별하게 만들어드릴게요.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Link href={category.href} className="block">
                  <div className="relative h-full animate-float" style={{ animationDelay: `${index * 1}s` }}>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                    
                    {/* Main Card */}
                    <Card className={`relative bg-white/70 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden transform hover:-translate-y-2 hover:scale-105`}>
                      {/* Gradient Border */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} rounded-3xl p-px`}>
                        <div className="bg-white rounded-3xl w-full h-full" />
                      </div>
                      
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-30 rounded-3xl`} />
                      
                      <CardContent className="relative p-8 text-center h-full flex flex-col">
                        {/* Icon Container */}
                        <div className="mb-6 flex justify-center">
                          <div className="relative group/icon">
                            {/* Icon Background */}
                            <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl p-0.5 shadow-lg transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300`}>
                              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                <Icon className="h-7 w-7 text-gray-700" />
                              </div>
                            </div>
                            
                            {/* Floating Emoji */}
                            <div className="absolute -top-2 -right-2 text-xl animate-bounce-slow">
                              {category.emoji}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                            {category.description}
                          </p>

                          {/* CTA */}
                          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.gradient} text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}>
                              <span>탐색하기</span>
                              <ArrowRight className="w-4 h-4 animate-bounce-x" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-gray-500 text-sm mb-6">
            더 많은 콘텐츠가 궁금하다면?
          </p>
          <Link href="/all-categories">
            <button className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">전체 카테고리 보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>


    </section>
  )
}