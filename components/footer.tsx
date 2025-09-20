
"use client";

import React from "react";
import { Instagram, Facebook, Twitter, ArrowUp, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-100">
      <div className="container max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              SOME.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              요즘 연애 트렌드를 가장 빠르게 전달하는 웹 매거진입니다. 
              건강하고 행복한 연애 문화를 함께 만들어갑니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                연애트렌드
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                라이프스타일
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                문화매거진
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">서비스</h4>
            <ul className="space-y-4">
              {[
                "서비스 소개",
                "개인정보처리방침", 
                "문의하기"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">연락처</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>hello@some.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.Icon className="h-4 w-4 text-gray-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">뉴스레터 구독</h3>
            <p className="text-gray-600 text-sm mb-6">최신 트렌드 소식을 이메일로 받아보세요</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <p>© 2024 SOME. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs">Made in Seoul</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
