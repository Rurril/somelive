import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#FAFAFA] text-[#333333]">
      <div className="container max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tighter text-[#333333]">매주 새로운 연애 트렌드를 놓치지 마세요</h3>
        <p className="text-[#333333] mb-8">최신 연애 트렌드와 데이트 팁을 이메일로 받아보세요</p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="이메일 주소를 입력하세요" 
            className="flex-1 bg-white border-2 border-gray-300 rounded-full px-6 py-3 text-[#333333] placeholder:text-gray-500 focus:ring-[#FF6B6B] focus:border-[#FF6B6B] transition-all duration-300"
          />
          <Button 
            type="submit"
            className="bg-[#FF6B6B] text-white font-bold rounded-full px-8 py-3 hover:bg-[#E05A5A] hover:shadow-md transition-all duration-300"
          >
            구독하기
          </Button>
        </form>
      </div>
    </section>
  )
}
