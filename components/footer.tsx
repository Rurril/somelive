import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] py-12 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold text-[#333333] mb-4">Love Trend Magazine</h3>
            <p className="text-gray-600 text-pretty">
              요즘 연애 트렌드를 가장 빠르게 전달하는 웹 매거진입니다. 건강하고 행복한 연애 문화를 만들어갑니다.
            </p>
          </div>

          {/* Center Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#333333]">서비스</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#333333]">소셜 미디어</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>© 2024 Love Trend Magazine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}