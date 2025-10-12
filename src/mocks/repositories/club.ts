import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail';
import type { ClubReview } from '@/pages/user/ClubDetail/types/review';
import type { Club } from '@/pages/user/Main/types/club';

export const clubs: Club[] = [
  // 문예
  {
    id: 1,
    name: '시향 동아리',
    category: 'LITERATURE',
    shortIntroduction: '시를 쓰고 낭송하며 문학적 감성을 키우는 모임입니다.',
    recruitStatus: '모집중',
  },
  {
    id: 2,
    name: '소설창작회',
    category: 'LITERATURE',
    shortIntroduction: '단편 소설을 집필하고 합평회를 진행합니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 3,
    name: '사진예술회',
    category: 'LITERATURE',
    shortIntroduction: '풍경과 인물 사진을 촬영하고 전시회를 개최합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 4,
    name: '연극반',
    category: 'LITERATURE',
    shortIntroduction: '연극을 기획하고 무대에 올리는 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 5,
    name: '캘리그라피 모임',
    category: 'LITERATURE',
    shortIntroduction: '글씨체 예술을 배우고 작품을 제작합니다.',
    recruitStatus: '모집 마감',
  },

  // 학술
  {
    id: 6,
    name: 'AI 연구회',
    category: 'STUDY',
    shortIntroduction: '머신러닝과 인공지능 논문을 함께 읽고 프로젝트를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 7,
    name: '경제 토론 동아리',
    category: 'STUDY',
    shortIntroduction: '경제 현안을 주제로 토론과 발표를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 8,
    name: '수학 문제 연구반',
    category: 'STUDY',
    shortIntroduction: '수학 올림피아드 스타일 문제를 함께 풉니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 9,
    name: '철학 소모임',
    category: 'STUDY',
    shortIntroduction: '철학 고전을 읽고 자유롭게 토론합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 10,
    name: '환경 과학 연구회',
    category: 'STUDY',
    shortIntroduction: '환경 문제와 해결 방안을 과학적으로 탐구합니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 11,
    name: '프로그래밍 스터디',
    category: 'STUDY',
    shortIntroduction: '최신 언어와 프레임워크를 공부하고 프로젝트를 만듭니다.',
    recruitStatus: '모집중',
  },

  // 종교
  {
    id: 12,
    name: '기독교 학생회',
    category: 'RELIGION',
    shortIntroduction: '성경 공부와 봉사활동을 함께하는 모임입니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 13,
    name: '불교 명상회',
    category: 'RELIGION',
    shortIntroduction: '명상을 통해 마음 수양과 수행을 함께합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 14,
    name: '가톨릭 청년회',
    category: 'RELIGION',
    shortIntroduction: '미사와 신앙 활동을 함께 실천합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 15,
    name: '종교 다문화 교류회',
    category: 'RELIGION',
    shortIntroduction: '여러 종교의 문화를 배우고 교류합니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 16,
    name: '이슬람 문화 연구회',
    category: 'RELIGION',
    shortIntroduction: '이슬람 전통과 문화를 공부하는 모임입니다.',
    recruitStatus: '모집중',
  },

  // 체육
  {
    id: 17,
    name: '풋살 클럽',
    category: 'SPORTS',
    shortIntroduction: '주말마다 풋살 경기를 즐기며 친목을 다집니다.',
    recruitStatus: '모집중',
  },
  {
    id: 18,
    name: '배드민턴 동아리',
    category: 'SPORTS',
    shortIntroduction: '초보부터 고수까지 함께 치는 배드민턴 모임입니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 19,
    name: '농구 동아리',
    category: 'SPORTS',
    shortIntroduction: '교내 대회를 목표로 농구 훈련과 경기를 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 20,
    name: '탁구반',
    category: 'SPORTS',
    shortIntroduction: '점심시간에 탁구를 치며 즐기는 모임입니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 21,
    name: '수영 동아리',
    category: 'SPORTS',
    shortIntroduction: '주 2회 수영장에서 연습과 친목 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 22,
    name: '등산 동호회',
    category: 'SPORTS',
    shortIntroduction: '주말마다 산을 오르며 체력과 인내심을 기릅니다.',
    recruitStatus: '모집중',
  },
  {
    id: 23,
    name: '요가 클래스',
    category: 'SPORTS',
    shortIntroduction: '몸과 마음의 균형을 위해 요가를 함께 합니다.',
    recruitStatus: '모집 마감',
  },

  // 봉사
  {
    id: 24,
    name: '지역 봉사단',
    category: 'VOLUNTEER',
    shortIntroduction: '지역 사회에서 다양한 봉사활동을 실천합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 25,
    name: '해외 봉사단',
    category: 'VOLUNTEER',
    shortIntroduction: '방학 기간에 해외로 봉사활동을 나가는 모임입니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 26,
    name: '헌혈 캠페인 동아리',
    category: 'VOLUNTEER',
    shortIntroduction: '정기적으로 헌혈을 독려하고 참여합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 27,
    name: '장애인 지원 동아리',
    category: 'VOLUNTEER',
    shortIntroduction: '장애인과 함께하는 다양한 봉사 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 28,
    name: '환경 봉사단',
    category: 'VOLUNTEER',
    shortIntroduction: '플로깅과 재활용 캠페인을 통해 환경을 지킵니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 29,
    name: '노인 돌봄 모임',
    category: 'VOLUNTEER',
    shortIntroduction: '양로원에서 어르신들과 시간을 보냅니다.',
    recruitStatus: '모집중',
  },
  {
    id: 30,
    name: '아이 돌봄 봉사단',
    category: 'VOLUNTEER',
    shortIntroduction: '지역 아동센터에서 교육 봉사를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 31,
    name: '유기동물 보호 동아리',
    category: 'VOLUNTEER',
    shortIntroduction: '보호소에서 유기동물을 돌보고 입양을 돕습니다.',
    recruitStatus: '모집 마감',
  },
  {
    id: 32,
    name: '다문화 지원 모임',
    category: 'VOLUNTEER',
    shortIntroduction: '이주민과 다문화 가정을 위한 활동을 합니다.',
    recruitStatus: '모집중',
  },
];

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
      'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1637073849667-91120a924221?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1683134153517-32015af21911?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1704756437647-559e43344877?q=80&w=1470',
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
      'https://plus.unsplash.com/premium_photo-1729880132913-4ca7d67f8eeb?q=80&w=1587',
      'https://plus.unsplash.com/premium_photo-1723917604890-418aa2307d2f?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1704756437707-e9fee5c04bcf?q=80&w=1470',
      'https://plus.unsplash.com/premium_photo-1704756437647-559e43344877?q=80&w=1470',
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

export const mockClubReviews: ClubReview[] = [
  {
    id: 1,
    writer: '익명1',
    content:
      '솔직히 처음에는 "종교 동아리"라고 해서 조금 망설였습니다. 분위기가 너무 경건하거나 믿음을 강요하지는 않을까 걱정했거든요. 괜한 걱정이었어요~',
    createdAt: '2025-10-01T10:00:00Z',
  },
  {
    id: 2,
    writer: '익명2',
    content:
      '그냥 시간표가 비어서 한번 가보자는 가벼운 마음으로 첫 모임에 나갔는데, 좋은 분들이 많아서 학기 중에 도움을 많이 받았습니다.',
    createdAt: '2025-10-02T14:30:00Z',
  },
  {
    id: 3,
    writer: '익명2',
    content: '사이비 종교와 관련없는 신앙심이 경건해지는 동아리!',
    createdAt: '2025-10-03T09:20:00Z',
  },
  {
    id: 4,
    writer: '익명3',
    content: '동아리 분위기가 너무 좋아요! 선배들이 친절하고 활동도 재밌어요 😊',
    createdAt: '2025-10-11T12:00:00Z',
  },
  {
    id: 2,
    writer: '김아진',
    content: '',
    createdAt: '2025-10-12T08:30:00Z',
  },
];

export const clubRepository = {
  getClubsByCategory: (filter: string) => {
    if (filter === 'ALL') return clubs;
    return clubs.filter((club) => club.category === filter);
  },

  getClubDetailById: (id: number) => {
    return mockClubDetail.find((club) => club.id === id);
  },

  updateClubDetail: (id: number, updatedData: Partial<ClubDetail>) => {
    const index = mockClubDetail.findIndex((club) => club.id === id);
    if (index === -1) return;

    mockClubDetail[index] = {
      ...mockClubDetail[index],
      ...updatedData,
    };

    return mockClubDetail[index];
  },
};
