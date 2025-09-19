"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function NewHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        delay: 1.2 + i * 0.4, 
        duration: 0.6, 
        ease: "easeOut" 
      },
    }),
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-green-950/20 to-teal-950/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-lime-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-green-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-3 h-3 bg-lime-400 rounded-full opacity-60"
          animate={floatingVariants.float}
        />
        <motion.div 
          className="absolute top-1/3 left-20 w-2 h-2 bg-teal-400 rounded-full opacity-60"
          animate={floatingVariants.float}
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-green-400 rounded-full opacity-40"
          animate={floatingVariants.float}
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-12">
        
        {/* Left Column: Enhanced Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-8 max-w-lg"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">2025 트렌드 매거진</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6"
            variants={itemVariants}
          >
            <span className="block text-white mb-2">사랑도</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              트렌드가
            </span>
            <span className="block text-white">있다</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light"
            variants={itemVariants}
          >
            썸부터 비연애까지,{" "}
            <span className="text-transparent bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text font-medium">
              20대의 모든 관계
            </span>
            를 해석하는 매거진
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
            variants={itemVariants}
          >
            <Link href="/trends" passHref>
              <motion.button
                className="group relative bg-gradient-to-r from-emerald-500 to-lime-600 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  트렌드 읽기 
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/about" passHref>
              <motion.button
                className="group relative bg-transparent border-2 border-teal-400/50 text-teal-300 font-bold py-4 px-10 rounded-2xl text-lg hover:bg-teal-400/5 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">지금 시작하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 opacity-70"
            variants={itemVariants}
          >
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-400">독자</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">트렌드 분석</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">업데이트</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: iPhone-style Phone UI */}
        <motion.div
          className="flex-1 flex items-center justify-center max-w-xs lg:max-w-sm"
          variants={itemVariants}
          initial="hidden"
          animate="show"
        >
          <div className="relative">
            {/* iPhone Frame */}
            <div className="relative w-72 h-[580px] bg-black rounded-[3.5rem] shadow-2xl">
              {/* Side Buttons */}
              <div className="absolute -left-1 top-28 w-1 h-8 bg-gray-800 rounded-l-md" />
              <div className="absolute -left-1 top-40 w-1 h-12 bg-gray-800 rounded-l-md" />
              <div className="absolute -left-1 top-56 w-1 h-12 bg-gray-800 rounded-l-md" />
              <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-r-md" />
              
              {/* Screen */}
              <div className="absolute inset-2 bg-gradient-to-b from-gray-950 to-black rounded-[2.8rem] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-gray-700 rounded-full" />
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white text-xs pt-12 pb-4 px-6 relative z-20">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-0.5">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    </div>
                    <svg className="w-6 h-4" fill="white" viewBox="0 0 24 24">
                      <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48c.3.5.75.87 1.29 1.02L6 14c-.84 0-1.56-.54-1.85-1.05zM22 12.07c-.19-.73-.74-1.34-1.49-1.54-.17-.05-.34-.08-.51-.08V9c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v1.45c-.17 0-.34.03-.51.08-.75.2-1.3.81-1.49 1.54L2 12.07V16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3.93z"/>
                    </svg>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 via-lime-500 to-green-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-lime-600 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">🌿</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">SomeLive</div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-green-400 text-xs font-medium">온라인</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3 text-teal-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Messages Container */}
                <div className="px-4 space-y-4 pb-20">
                  {/* Received Message 1 */}
                  <motion.div
                    className="flex justify-start"
                    custom={0}
                    variants={messageVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="bg-gray-800/80 backdrop-blur-sm text-white rounded-3xl rounded-bl-lg px-4 py-3 max-w-[80%] shadow-lg">
                      <p className="text-sm leading-relaxed">요즘 연애 고민 많지? 🤔</p>
                      <div className="text-xs text-gray-400 mt-1">오후 2:14</div>
                    </div>
                  </motion.div>

                  {/* Sent Message 1 */}
                  <motion.div
                    className="flex justify-end"
                    custom={1}
                    variants={messageVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-3xl rounded-br-lg px-4 py-3 max-w-[80%] shadow-lg">
                      <p className="text-sm leading-relaxed">응, 트렌드가 너무 빨라 ㅠㅠ</p>
                      <div className="text-xs text-teal-100 mt-1 text-right">오후 2:15</div>
                    </div>
                  </motion.div>

                  {/* Received Message 2 */}
                  <motion.div
                    className="flex justify-start"
                    custom={2}
                    variants={messageVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="bg-gray-800/80 backdrop-blur-sm text-white rounded-3xl rounded-bl-lg px-4 py-3 max-w-[80%] shadow-lg">
                      <p className="text-sm leading-relaxed">SomeLive에서 다 알려줄게! 📖✨</p>
                      <div className="text-xs text-gray-400 mt-1">오후 2:16</div>
                    </div>
                  </motion.div>

                  {/* Sent Message 2 */}
                  <motion.div
                    className="flex justify-end"
                    custom={3}
                    variants={messageVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="bg-gradient-to-r from-emerald-500 to-lime-600 text-white rounded-3xl rounded-br-lg px-4 py-3 max-w-[80%] shadow-lg">
                      <p className="text-sm leading-relaxed">오, 진짜? 기대된다! 💖</p>
                      <div className="text-xs text-emerald-100 mt-1 text-right">오후 2:17</div>
                    </div>
                  </motion.div>

                  {/* Typing Indicator */}
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl rounded-bl-lg px-4 py-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>
            </div>

            {/* Enhanced Glow Effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-[4rem] blur-3xl -z-10" />
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/10 to-lime-600/10 rounded-[4rem] blur-xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
