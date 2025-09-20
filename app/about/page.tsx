"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CoreValue from '@/components/core-value';
import Link from 'next/link';
import { Header } from '@/components/header';
import { NewHeroSection } from '@/components/new-hero-section'; // NewHeroSection을 import 합니다.

// 텍스트 강조를 위한 컴포넌트 (마이크로 인터랙션)
const HighlightedText = ({ children, color = "text-[#FF4D88]" }) => {
  return (
    <motion.span
      className={`relative inline-block ${color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.span>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      
      {/* 기존 Hero Section을 NewHeroSection 컴포넌트로 교체합니다. */}
      <NewHeroSection />

      <main className="container mx-auto px-4 py-16">
        {/* Mission Statement / Introduction */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <HighlightedText>SomeLive</HighlightedText>는 더 이상 '연애 상담소'가 아닌, 20대 연인들의 라이프스타일 트렌드를 담아내는 매거진입니다. 
            연애를 '잘하는 방법'을 알려주기보다, 지금 가장 핫한 커플들의 문화와 트렌드를 분석하고 제안함으로써 당신의 연애에 새로운 영감과 즐거움을 불어넣어 드립니다.
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            우리는 연애를 삶의 한 부분으로 여기며, 두 사람이 함께 즐길 수 있는 다채로운 경험들을 중요하게 생각합니다. 
            단순히 데이트 장소를 추천하는 것을 넘어, <HighlightedText>'함께'의 가치</HighlightedText>를 극대화하는 모든 것을 다룹니다.
          </motion.p>
        </section>

        {/* Core Values Section */}
        <section className="mb-24">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Somelive의 <span className="text-[#00D4C7]">핵심 가치</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CoreValue
              title="공감"
              description="완벽한 연애 말고, 솔직한 고민과 경험을 나눕니다."
              icon="M19 11H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2zM5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M9 9h6"
            />
            <CoreValue
              title="성장"
              description="사랑을 통해 더 나은 나를 발견하는 여정을 함께 합니다."
              icon="M5 13H19M12 5L12 19"
            />
            <CoreValue
              title="다양성"
              description="모든 형태의 관계를 존중하고, 새로운 시각을 제안합니다."
              icon="M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Somelive는 <span className="text-[#C9A0FF]">이런 당신</span>을 기다립니다
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            늘 가던 데이트 코스가 지겨워 새로운 영감을 찾는 당신<br/>
            연인과 함께 새로운 취미나 경험을 시작하고 싶은 당신<br/>
            '요즘' 연애 트렌드를 파악하고 싶어 하는 당신<br/>
            관계의 신선함을 유지하고 싶은 모든 연인들
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/subscribe" passHref>
              <motion.button
                className="bg-[#FF4D88] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">지금 바로 Somelive 시작하기 →</span>
                {/* Ripple effect on hover */}
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 rounded-full"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Final Statement */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Somelive는 트렌드를 쫓는 것이 아닌, 트렌드를 만들어가는 당신을 위한 매거진입니다. 
            당신의 연애를 더욱 풍요롭게 만들어줄 다양한 이야기들을 지금 바로 만나보세요.
          </motion.p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 SomeLive. All rights reserved.</p>
          {/* Social media links could go here */}
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;