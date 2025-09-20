import { NextResponse } from "next/server";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

const trendItems = [
    // 기존 데이터
    {
        id: 1,
        category: "연애 트렌드",
        title: "가치관 데이트가 MZ세대 사이에서 폭발적 인기, 기존 만남 방식 변화 이끌어",
        description: "외모나 조건보다 내면의 가치관을 중시하는 새로운 연애 문화가 확산되고 있습니다. 이제 젊은 세대는 대화를 통해 서로의 가치관을 확인하고, 깊이 있는 관계를 형성하는 것을 중요하게 생각합니다.",
        date: "2024.09.19",
        change: "+156%",
        changeType: "up",
        tags: ["가치관", "데이트", "MZ세대"],
        isHot: true,
        satisfaction: "94.2%",
        image: "/modern-dating-trends-illustration-young-people-lif.jpg"
    },
    {
        id: 2,
        category: "심리 테스트",
        title: "애착유형 테스트로 알아보는 나의 연애 패턴, 건강한 관계 맺기 열풍",
        description: "자신의 애착 스타일을 파악하여 더 나은 연애를 추구하는 사람들이 늘고 있습니다. 심리 테스트를 통해 관계의 안정성을 높이고, 갈등을 줄이는 방법을 모색합니다.",
        date: "2024.09.18",
        change: "+80%",
        changeType: "up",
        tags: ["애착유형", "심리테스트", "관계"],
        isHot: false,
        satisfaction: "87.5%",
        image: "/psychology-test-on-smartphone-screen.jpg"
    },
    {
        id: 3,
        category: "연애 기술",
        title: "MBTI 궁합 의존도 감소, '실제 대화'를 통한 궁합 확인이 대세",
        description: "성격 유형 지표에 의존하기보다, 직접적인 소통을 통해 서로를 알아가는 것을 중시하는 연애 패턴으로 변화하고 있습니다. 진솔한 대화가 관계의 핵심으로 떠오릅니다.",
        date: "2024.09.17",
        change: "-15%",
        changeType: "down",
        tags: ["MBTI", "궁합", "소통"],
        isHot: false,
        satisfaction: "72.1%",
        image: "/young-people-discussing-mbti-personality-types.jpg"
    },
    {
        id: 4,
        category: "데이트 문화",
        title: "취미공유데이트의 부상, 함께 성장하는 커플 관계 추구",
        description: "단순한 식사나 카페 데이트를 넘어, 함께 새로운 것을 배우고 경험하며 성장할 수 있는 '취미 공유 데이트'가 인기를 끌고 있습니다. 공통의 관심사가 관계를 더욱 단단하게 만듭니다.",
        date: "2024.09.16",
        change: "+67%",
        changeType: "up",
        tags: ["취미", "공유", "성장"],
        isHot: true,
        satisfaction: "91.3%",
        image: "/happy-couple-in-cozy-cafe-warm-lighting-romantic-a.jpg"
    },
    {
        id: 5,
        category: "AI 연애",
        title: "AI 연애 코칭 서비스 급성장, 개인 맞춤형 조언으로 연애 성공률 향상",
        description: "인공지능 기술을 활용해 개인별 연애 고민에 대한 상담과 코칭을 제공하는 서비스가 각광받고 있습니다. 데이터 기반의 객관적인 조언이 연애의 길잡이가 되어줍니다.",
        date: "2024.09.15",
        change: "+125%",
        changeType: "up",
        tags: ["AI", "코칭", "맞춤형"],
        isHot: true,
        satisfaction: "89.7%",
        image: "/modern-dating-app-interface-with-ai-features.jpg"
    },
    {
        id: 6,
        category: "관계 심리",
        title: "감정일기공유 커플들이 늘어나는 이유, 깊이 있는 소통의 중요성",
        description: "서로의 하루와 감정을 솔직하게 기록하고 공유하며 관계의 깊이를 더하는 '감정 일기' 트렌드가 새로운 소통 방식으로 자리잡고 있습니다.",
        date: "2024.09.14",
        change: "+43%",
        changeType: "up",
        tags: ["감정일기", "소통", "공유"],
        isHot: false,
        satisfaction: "85.9%",
        image: "/couple-having-deep-conversation-at-cafe.jpg"
    },
    // 새로 추가된 데이터
    {
        id: 7,
        category: "데이트 문화",
        title: "카공(카페 공부) 말고 카데이트 — 카페가 연애의 중심지",
        description: "**커피 한 잔, 우리 관계의 온도**<br/><br/>20대 커플에게 카페는 단순히 음료를 마시는 공간이 아니라, 대화와 감정 교류의 무대다. 아늑한 분위기, 감성적인 인테리어, 시그니처 메뉴가 중요한 선택 기준이 된다. 그러나 ‘카공족’이 많은 곳이나 시끄러운 프랜차이즈 카페는 선호도가 떨어진다. 요즘은 개성 있는 로컬 카페나 루프탑 카페가 데이트 핫플레이스로 주목받고 있다.",
        date: "2025.09.20",
        change: "+95%",
        changeType: "up",
        tags: ["카페", "데이트", "감성"],
        isHot: true,
        satisfaction: "92.8%",
        image: "/happy-couple-in-cozy-cafe-warm-lighting-romantic-a.jpg"
    },
    {
        id: 8,
        category: "데이트 문화",
        title: "멀리 안 가도 좋아 — 근거리 데이트 선호 트렌드",
        description: "**한강, 동네 산책, 편안함이 주는 친밀감**<br/><br/>경제적 부담과 바쁜 일정 속에서 장거리 데이트보다는 집 근처에서 즐길 수 있는 소소한 데이트가 인기다. 한강에서 돗자리 펴고 간단한 간식 먹기, 동네 맛집 탐방, 산책 같은 가벼운 활동이 만족도를 높인다. 반대로, 시간·비용이 많이 드는 고급 레스토랑, 테마파크, 해외여행은 20대 초반 커플 사이에서 오히려 ‘부담스럽다’는 의견이 많다.",
        date: "2025.09.19",
        change: "+78%",
        changeType: "up",
        tags: ["근거리", "산책", "가성비"],
        isHot: false,
        satisfaction: "88.1%",
        image: "/placeholder.jpg"
    },
    {
        id: 9,
        category: "데이트 문화",
        title: "인스타그램이 정한 데이트 루트 — SNS가 만드는 트렌드",
        description: "**사진이 곧 추억, 해시태그가 곧 가이드북**<br/><br/>데이트 장소를 정할 때 인스타그램·틱톡 같은 SNS에서 먼저 검색하는 것이 일상화되었다. ‘#서울데이트코스’ 해시태그는 사실상 지도 역할을 한다. 예쁜 사진이 잘 나오는 스팟, 감성적인 조명과 인테리어는 곧 선택 기준. 그러나 지나치게 ‘인증샷용’인 장소는 진정성을 해친다는 이유로 피하는 커플도 많다.",
        date: "2025.09.18",
        change: "+110%",
        changeType: "up",
        tags: ["SNS", "인스타그램", "인증샷"],
        isHot: true,
        satisfaction: "85.5%",
        image: "/modern-dating-trends-illustration-young-people-lif.jpg"
    },
    {
        id: 10,
        category: "데이트 문화",
        title: "돈보다 분위기 — 가성비 대신 가심비",
        description: "**우리가 특별해지는 순간을 사는 법**<br/><br/>20대 커플은 데이트에서 ‘비용 효율’보다는 ‘감정적 가치’를 중시한다. 값비싼 디너 대신, 분위기 좋은 소품샵 구경이나 전시회 관람이 선호되는 이유다. 작은 이벤트(편지, 사진, 깜짝 선물)도 중요한 포인트. 하지만 보여주기식 소비, 무리한 선물 문화는 오히려 부담으로 작용한다.",
        date: "2025.09.17",
        change: "+65%",
        changeType: "up",
        tags: ["가심비", "분위기", "가치"],
        isHot: false,
        satisfaction: "91.2%",
        image: "/couple-having-deep-conversation-at-cafe.jpg"
    },
    {
        id: 11,
        category: "데이트 문화",
        title: "조용한 공간, 편한 분위기 — 싫어하는 데이트 유형",
        description: "**과한 소음과 과한 시선은 NO**<br/><br/>사람들이 붐비는 클럽, 술집, 북적이는 쇼핑몰은 데이트 장소로 외면받는 경우가 많다. ‘둘만의 시간을 방해하는 요소’가 있는 공간은 기피 대상. 대신 조용히 대화할 수 있는 북카페, 소극장, 전시관 같은 차분한 공간이 선호된다. 트렌드는 결국 ‘관계의 질’을 얼마나 높여주는지에 따라 결정된다.",
        date: "2025.09.16",
        change: "-25%",
        changeType: "down",
        tags: ["조용한", "대화", "실내데이트"],
        isHot: false,
        satisfaction: "79.8%",
        image: "/trendy-restaurant-interior-korean-style-modern-dat.jpg"
    }
];

export async function GET() {
  try {
    const trendsCollection = collection(db, "trends");
    let count = 0;

    for (const item of trendItems) {
      // Check if an item with the same ID already exists
      const q = query(trendsCollection, where("id", "==", item.id));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        await addDoc(trendsCollection, item);
        count++;
      }
    }

    if (count === 0) {
        return NextResponse.json({ message: "Database already seeded. No new items were added." });
    }

    return NextResponse.json({ message: `Successfully seeded ${count} items to the database.` });
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json({ error: "Failed to seed database." }, { status: 500 });
  }
}