"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Zap, Heart, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#", text: "고민 상담소"},
  { href: "/trends", text: "최신 트렌드", emoji: "🔥" },
  { href: "/news", text: "뉴스"},
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [yellowSpread, setYellowSpread] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPostPageVisible, setIsPostPageVisible] = useState(true);
  
  const pathname = usePathname();
  const isPostPage = pathname.startsWith('/posts/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (isPostPage) {
        // Post page: show/hide logic
        if (scrollTop > lastScrollY && scrollTop > 100) {
          setIsPostPageVisible(false); // Scrolling down
        } else {
          setIsPostPageVisible(true); // Scrolling up
        }
        setLastScrollY(scrollTop);
      } else {
        // Other pages: existing logic
        const maxScroll = 200;
        if (scrollTop > 50) {
          setIsScrolled(true);
          const spreadPercentage = Math.min((scrollTop - 50) / (maxScroll - 50), 1);
          setYellowSpread(spreadPercentage);
        } else {
          setIsScrolled(false);
          setYellowSpread(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPostPage, lastScrollY]);

  const headerClasses = isPostPage
    ? `transition-transform duration-300 ease-in-out ${isPostPageVisible ? 'translate-y-0' : '-translate-y-full'}`
    : '';

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${headerClasses}`}>
      {/* Yellow spreading background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-lime-300 transition-all duration-700 ease-out"
        style={{
          clipPath: `circle(${yellowSpread * 150}% at 50% 0%)`,
          opacity: yellowSpread > 0 ? 1 : 0
        }}
      />
      
      {/* Original background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled && !isPostPage
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20' 
          : 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50'
      }`} />

      <div className="container mx-auto flex h-20 items-center justify-between px-6 relative z-10">
        {/* Logo */}
        <Link href="/" className="group cursor-pointer flex items-center gap-2">
          <div className="relative">
            <h1 className={`text-3xl font-black tracking-wider transition-all duration-500 ${
              isScrolled && !isPostPage
                ? 'text-gray-900 drop-shadow-sm' 
                : 'text-gray-900'
            }`}>
              <span className="group-hover:text-pink-500 transition-colors duration-300 inline-block group-hover:animate-bounce">S</span>
              <span className="group-hover:text-pink-500 transition-colors duration-300 inline-block group-hover:animate-bounce" style={{animationDelay: '0.1s'}}>O</span>
              <span className="transition-colors duration-300 inline-block">M</span>
              <span className="transition-colors duration-300 inline-block">E</span>
              <span className={`${isScrolled && !isPostPage ? 'text-gray-900' : 'text-gray-900'}`}>.</span>
            </h1>
            {isScrolled && !isPostPage && (
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
              </div>
            )}
          </div>
          
          {isScrolled && !isPostPage && (
            <div className="ml-2 px-3 py-1 bg-black/80 text-white text-xs font-bold rounded-full animate-pulse">
              TRENDY
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`group relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full hover:scale-105 ${
                isScrolled && !isPostPage
                  ? 'text-gray-900 hover:bg-black/10 hover:text-black'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:animate-bounce">{link.emoji}</span>
                {link.text}
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm"></div>
              
              {/* Bottom line */}
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-8 ${
                isScrolled && !isPostPage
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                  : 'bg-gradient-to-r from-pink-400 to-blue-400'
              }`} />
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Search with cool effect */}
          <div className="relative group">
            <button className={`p-3 rounded-full transition-all duration-300 ${
              isScrolled && !isPostPage
                ? 'text-gray-900 hover:bg-black/10 hover:scale-110'
                : 'text-gray-600 hover:bg-gray-100 hover:scale-110'
            }`}>
              <Search className="h-5 w-5" />
            </button>
            {isScrolled && !isPostPage && (
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur animate-pulse"></div>
            )}
          </div>

          {/* Login button */}
          <button className={`hidden sm:flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 group ${
            isScrolled && !isPostPage
              ? 'bg-orange-500 text-white shadow-lg hover:bg-orange-600'
              : 'bg-transparent border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}>
            <span>로그인</span>
            {isScrolled && !isPostPage ? (
              <Zap className="w-4 h-4 group-hover:animate-bounce" />
            ) : (
              <Heart className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled && !isPostPage
                ? 'text-gray-900 hover:bg-black/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden transition-all duration-500 ${
          isScrolled && !isPostPage
            ? 'bg-yellow-300/95 backdrop-blur-xl border-t border-yellow-400/30' 
            : 'bg-white/95 backdrop-blur-xl border-t border-gray-200'
        }`}>
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center justify-center gap-3 text-lg font-bold py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  isScrolled && !isPostPage
                    ? 'text-gray-900 hover:bg-black/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl animate-bounce">{link.emoji}</span>
                {link.text}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-current/20">
              <button className={`w-full py-3 font-bold rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled && !isPostPage
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-orange-500 text-white'
              }`}>
                로그인하고 시작하기 ✨
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating particles effect when scrolled */}
      {isScrolled && !isPostPage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}
    </header>
  );
}