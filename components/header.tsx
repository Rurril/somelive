"use client"

import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "#", text: "데이트 코스" },
  { href: "#", text: "심리 테스트" },
  { href: "#", text: "고민 상담소" },
  { href: "/trends", text: "최신 트렌드" },
  { href: "/news", text: "뉴스" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link href="/" className="group cursor-pointer">
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-wider">
                <span className="group-hover:text-[#FF6B6B] transition-colors duration-300">S</span>
                <span className="group-hover:text-[#A3E4D7] transition-colors duration-300">O</span>
                <span className="group-hover:text-[#FF6B6B] transition-colors duration-300">M</span>
                <span className="group-hover:text-[#A3E4D7] transition-colors duration-300">E</span>
                <span className="text-gray-900">.</span>
              </h1>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-white border-gray-200 text-gray-900">
            <DropdownMenuItem asChild>
              <Link href="/about" className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                About Us
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              {link.text}
              <span 
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-[#FF6B6B] to-[#A3E4D7]' : 'from-[#A3E4D7] to-[#FF6B6B]'} transition-all duration-300 group-hover:w-full`}
              />
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            className="hidden sm:flex bg-transparent border-2 border-gray-400 text-gray-700 rounded-full font-bold text-sm px-6 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 group"
          >
            로그인
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">✨</span>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200">
          <div className="container mx-auto px-6 py-8 space-y-6">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="block text-lg font-semibold text-center text-gray-700 hover:text-gray-900 hover:scale-105 transition-all duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-200">
              <Button className="w-full bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-[#E05A5A]">
                로그인
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}