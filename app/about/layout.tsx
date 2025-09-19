import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "About SomeLive - 우리들의 이야기",
  description: "SomeLive는 20대 연애 트렌드를 선도하는 매거진입니다. 데이터 기반 분석과 문화적 통찰로 건강하고 행복한 관계를 응원합니다.",
  openGraph: {
    title: "About SomeLive - 우리들의 이야기",
    description: "SomeLive는 20대 연애 트렌드를 선도하는 매거진입니다. 데이터 기반 분석과 문화적 통찰로 건강하고 행복한 관계를 응원합니다.",
    url: "https://somelive.com/about", // 실제 도메인으로 변경 필요
    images: [
      {
        url: "https://somelive.com/og-image.jpg", // 실제 OG 이미지 경로로 변경 필요
        width: 1200,
        height: 630,
        alt: "SomeLive About Us",
      },
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
