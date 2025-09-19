import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-black flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/couple-having-deep-conversation-at-cafe.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"  // opacity 조금 높임
        />
      </div>
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
          <span className="text-emerald-400">연애</span>의 모든 것,<br />
          <span className="text-lime-400">SomeLive</span>에서 시작하세요
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          20대 연애 트렌드, 심리 테스트, 데이트 코스 추천까지!
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-3 text-lg font-bold shadow-lg transition-colors">
            매거진 보기
          </Button>
          <Button variant="outline" className="border-2 border-lime-400 text-lime-400 rounded-full px-8 py-3 text-lg font-bold hover:bg-lime-400/10 transition-colors">
            테스트 시작
          </Button>
        </div>
      </div>
    </section>
  )
}