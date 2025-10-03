import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail'; 

export const mockClubDetail: ClubDetail[] = [
  {
    id: 1,
    clubName: '인터엑스',
    location: '공7 201호',
    category: '사회연구',
    shortIntroduction: '사회문제에 관심 있는 사람들을 위한 동아리',
    introductionImages: [
      'https://plus.unsplash.com/premium_photo-1729880132913-4ca7d67f8eeb?q=80&w=1587',
      'https://plus.unsplash.com/premium_photo-1723917604890-418aa2307d2f?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1704756437707-e9fee5c04bcf?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1704756437647-559e43344877?q=80&w=1470',
    ],
    introductionOverview: `인터엑스는 사회 문제를 깊이 있게 탐구하고 이를 해결하기 위해 다양한 활동을 기획하는 동아리입니다. 
회원들은 토론, 조사, 캠페인 등을 통해 실제 사회 문제를 이해하고, 문제 해결을 위한 창의적 방법을 모색합니다. 
학문적 연구와 실질적 활동을 병행하며, 서로의 생각을 존중하고 협력하는 문화를 지향합니다.`,
    introductionActivity: `동아리 활동으로는 매주 세미나와 그룹 토론, 지역 사회 봉사활동, 캠페인 기획 및 참여 등이 있습니다. 
회원들은 각자의 관심 분야를 살려 프로젝트를 진행하며, 발표와 보고서를 통해 성과를 공유합니다. 
또한 외부 전문가 초청 강연을 통해 사회 문제에 대한 이해를 넓히고, 실천 가능한 해결책을 모색합니다.`,
    introductionIdeal: `인터엑스에서는 성실하고 책임감 있는 인재를 기다립니다. 
문제 해결에 관심이 많고 창의적 아이디어를 공유할 수 있는 사람, 
팀원들과 협력하며 꾸준히 학습하고 성장하려는 자세를 가진 사람이라면 누구나 환영합니다.`,
    regularMeetingInfo: '매주 화요일 오후 6시',
    recruitStatus: '모집중',
    presidentName: '김춘식',
    presidentPhoneNumber: '010-9619-7677',
    recruitStart: '2025-09-03T00:00:00',
    recruitEnd: '2025-09-20T23:59:00',
    applicationNotice: '현재 지원은 휴학생을 제외한 1~3학년만 받고 있습니다.',
  },
  {
    id: 2,
    clubName: '코드마스터',
    location: '공5 102호',
    category: '프로그래밍',
    shortIntroduction: '프로그래밍과 최신 기술을 탐구하는 동아리',
    introductionImages: [
      'https://plus.unsplash.com/premium_photo-1700000000001-abcdef?q=80&w=1587',
      'https://plus.unsplash.com/premium_photo-1700000000002-abcdef?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1700000000003-abcdef?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1700000000004-abcdef?q=80&w=1470',
    ],
    introductionOverview: `코드마스터는 최신 프로그래밍 언어와 프레임워크를 학습하고, 
팀 단위 프로젝트를 진행하며 실무 경험을 쌓는 동아리입니다. 
회원들은 개발 관련 세미나와 스터디를 통해 기술적 역량을 지속적으로 향상시킵니다.`,
    introductionActivity: `동아리 활동으로는 매주 코드 리뷰 세션, 알고리즘 스터디, 팀 프로젝트 진행 등이 있습니다. 
회원들은 프로젝트 결과물을 공유하고, 함께 문제를 해결하며 성장합니다. 
또한 외부 개발자 초청 강연을 통해 최신 기술 동향을 습득합니다.`,
    introductionIdeal: `코드마스터에서는 적극적으로 배우고 실습할 의지가 있는 인재를 환영합니다. 
새로운 기술을 탐구하고, 팀원과 협업하며 성장하려는 자세가 있는 사람이라면 누구든 참여 가능합니다.`,
    regularMeetingInfo: '매주 수요일 오후 7시',
    recruitStatus: '모집중',
    presidentName: '이상현',
    presidentPhoneNumber: '010-1234-5678',
    recruitStart: '2025-09-05T00:00:00',
    recruitEnd: '2025-09-25T23:59:00',
    applicationNotice: '1~4학년 모두 지원 가능합니다.',
  },
  {
    id: 3,
    clubName: '아트픽',
    location: '예술관 301호',
    category: '예술',
    shortIntroduction: '창작 활동과 전시를 즐기는 예술 동아리',
    introductionImages: [
      'https://plus.unsplash.com/premium_photo-1710000000001-abcdef?q=80&w=1587',
      'https://plus.unsplash.com/premium_photo-1710000000002-abcdef?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1710000000003-abcdef?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1710000000004-abcdef?q=80&w=1470',
    ],
    introductionOverview: `아트픽은 회원들이 창작 활동을 통해 자신만의 작품을 제작하고, 
전시회를 통해 작품을 공유하는 것을 목표로 하는 동아리입니다. 
회원들은 서로의 작품을 감상하고 피드백하며 예술적 감각을 향상시킵니다.`,
    introductionActivity: `동아리 활동으로는 회화, 조각, 사진, 영상 등 다양한 창작 프로젝트를 진행합니다. 
정기적으로 작품 전시회를 열고, 회원들은 서로의 작품을 평가하고 토론합니다. 
또한 외부 예술가 초청 워크숍을 통해 새로운 기법과 표현 방식을 배우게 됩니다.`,
    introductionIdeal: `아트픽에서는 창의적이고 꾸준히 작품 활동을 이어갈 수 있는 인재를 기다립니다. 
자신의 아이디어를 실현하고, 다른 회원과 협력하며 성장할 의지가 있는 사람이라면 누구든 환영합니다.`,
    regularMeetingInfo: '매주 금요일 오후 5시',
    recruitStatus: '모집중',
    presidentName: '박예진',
    presidentPhoneNumber: '010-8765-4321',
    recruitStart: '2025-09-07T00:00:00',
    recruitEnd: '2025-09-30T23:59:00',
    applicationNotice: '모든 학년 지원 가능, 특별한 조건 없음.',
  },
];