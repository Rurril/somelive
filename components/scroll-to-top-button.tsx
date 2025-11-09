"use client";

import { ArrowUp } from "lucide-react";
import React from "react";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
      aria-label="맨 위로 이동"
    >
      <ArrowUp className="w-4 h-4 text-gray-600" />
    </button>
  );
}
