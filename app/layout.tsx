import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
import "keen-slider/keen-slider.min.css"

export const metadata: Metadata = {
  title: "Love Trend Magazine - 요즘 연애 트렌드",
  description: "가장 빠른 연애 트렌드를 만나보세요. 데이트 코스, 심리 테스트, 고민 상담까지!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
