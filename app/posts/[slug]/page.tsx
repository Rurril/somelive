// app/posts/[slug]/page.tsx

import { notFound } from "next/navigation"
import Image from "next/image"

// 임시 데이터 (실제로는 DB나 CMS에서 불러오기)
const posts = [
  {
    slug: "ai-dating-app-review",
    title: "AI가 소개해주는 운명의 상대, AI 소개팅 어플을 파헤쳐본다",
    date: "2025.09.19",
    author: "TrendMag Team",
    category: "연애 트렌드",
    coverImage: "/modern-dating-app-interface-with-ai-features.jpg", // 올바른 이미지 경로로 수정
    content: `
요즘 20대 사이에서 AI 소개팅 어플이 새로운 트렌드로 떠오르고 있다.  
단순히 외모나 스펙 매칭을 넘어, **성향 분석과 대화 패턴까지 학습한 AI**가 '운명의 상대'를 찾아준다고 한다.  

---

### 1. 왜 지금 AI 소개팅인가?
취업, 학업 등으로 바쁜 20대에게 소개팅은 여전히 필요하지만 시간을 내기 어렵다. AI가 이 과정을 간소화하면서 '시간 절약 + 맞춤 매칭'이라는 장점을 제공한다.  

### 2. 실제 사용 후기
- "사람이 소개해준 것보다 대화가 잘 통했다."
- "AI가 내 취향을 너무 잘 알아서 좀 무서울 정도였다."
- "첫 만남의 어색함을 줄여줬다."  

### 3. 하지만 우려되는 점
개인정보 수집과 알고리즘 편향 문제는 여전히 큰 이슈다. AI가 과연 '진짜 사랑'까지 연결해줄 수 있을까?  

---

### 💡 트렌드 인사이트
AI 소개팅 어플은 단순한 유행을 넘어, **'연애 문화' 자체를 재정의**할 가능성을 가진다.  
앞으로 연애의 시작은 '소개팅 자리'가 아니라 'AI 알고리즘'에서 비롯될지도 모른다.
    `,
  },
]

// 본문 내용을 스타일링된 HTML로 변환하는 함수
function PostContent({ content }: { content: string }) {
    const contentHtml = content
        .split('\n')
        .map(line => {
            if (line.startsWith('### ')) {
                return `<h3>${line.substring(4)}</h3>`;
            }
            if (line.startsWith('**')) {
                return `<strong>${line.replace(/\*\*/g, '')}</strong>`;
            }
            if (line.startsWith('- ')) {
                return `<li>${line.substring(2)}</li>`;
            }
            if (line === '---') {
                return `<hr />`;
            }
            return `<p>${line}</p>`;
        })
        .join('')
        .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>') // 간단한 리스트 처리
        .replace(/<\/ul><ul>/g, '');

    return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <div className="bg-black text-white min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* 카테고리 & 날짜 */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="px-3 py-1 bg-[#FF4D88] text-white rounded-full font-medium text-xs">
            {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
        </div>

        {/* 제목 */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
        </h1>

        {/* 커버 이미지 */}
        <div className="mb-10 relative aspect-video">
            <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
            />
        </div>

        {/* 본문 */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-300 prose-strong:text-white prose-hr:border-gray-700">
            <PostContent content={post.content} />
        </div>

        {/* 하단 구분선 + 태그 */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-500">
            <span className="font-mono">#AI #소개팅 #연애트렌드</span>
            <span>© TrendMag</span>
        </div>
        </article>
    </div>
  )
}
