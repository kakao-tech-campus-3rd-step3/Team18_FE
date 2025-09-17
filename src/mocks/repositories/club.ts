import type { Club } from '@/pages/user/Main/types/club';

export const clubs: Club[] = [
  // 문예
  {
    id: 1,
    name: '시향 동아리',
    category: '문예',
    shortIntroduction: '시를 쓰고 낭송하며 문학적 감성을 키우는 모임입니다.',
    recruitStatus: '모집중',
  },
  {
    id: 2,
    name: '소설창작회',
    category: '문예',
    shortIntroduction: '단편 소설을 집필하고 합평회를 진행합니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 3,
    name: '사진예술회',
    category: '문예',
    shortIntroduction: '풍경과 인물 사진을 촬영하고 전시회를 개최합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 4,
    name: '연극반',
    category: '문예',
    shortIntroduction: '연극을 기획하고 무대에 올리는 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 5,
    name: '캘리그라피 모임',
    category: '문예',
    shortIntroduction: '글씨체 예술을 배우고 작품을 제작합니다.',
    recruitStatus: '모집마감',
  },

  // 학술
  {
    id: 6,
    name: 'AI 연구회',
    category: '학술',
    shortIntroduction: '머신러닝과 인공지능 논문을 함께 읽고 프로젝트를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 7,
    name: '경제 토론 동아리',
    category: '학술',
    shortIntroduction: '경제 현안을 주제로 토론과 발표를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 8,
    name: '수학 문제 연구반',
    category: '학술',
    shortIntroduction: '수학 올림피아드 스타일 문제를 함께 풉니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 9,
    name: '철학 소모임',
    category: '학술',
    shortIntroduction: '철학 고전을 읽고 자유롭게 토론합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 10,
    name: '환경 과학 연구회',
    category: '학술',
    shortIntroduction: '환경 문제와 해결 방안을 과학적으로 탐구합니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 11,
    name: '프로그래밍 스터디',
    category: '학술',
    shortIntroduction: '최신 언어와 프레임워크를 공부하고 프로젝트를 만듭니다.',
    recruitStatus: '모집중',
  },

  // 종교
  {
    id: 12,
    name: '기독교 학생회',
    category: '종교',
    shortIntroduction: '성경 공부와 봉사활동을 함께하는 모임입니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 13,
    name: '불교 명상회',
    category: '종교',
    shortIntroduction: '명상을 통해 마음 수양과 수행을 함께합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 14,
    name: '가톨릭 청년회',
    category: '종교',
    shortIntroduction: '미사와 신앙 활동을 함께 실천합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 15,
    name: '종교 다문화 교류회',
    category: '종교',
    shortIntroduction: '여러 종교의 문화를 배우고 교류합니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 16,
    name: '이슬람 문화 연구회',
    category: '종교',
    shortIntroduction: '이슬람 전통과 문화를 공부하는 모임입니다.',
    recruitStatus: '모집중',
  },

  // 체육
  {
    id: 17,
    name: '풋살 클럽',
    category: '체육',
    shortIntroduction: '주말마다 풋살 경기를 즐기며 친목을 다집니다.',
    recruitStatus: '모집중',
  },
  {
    id: 18,
    name: '배드민턴 동아리',
    category: '체육',
    shortIntroduction: '초보부터 고수까지 함께 치는 배드민턴 모임입니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 19,
    name: '농구 동아리',
    category: '체육',
    shortIntroduction: '교내 대회를 목표로 농구 훈련과 경기를 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 20,
    name: '탁구반',
    category: '체육',
    shortIntroduction: '점심시간에 탁구를 치며 즐기는 모임입니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 21,
    name: '수영 동아리',
    category: '체육',
    shortIntroduction: '주 2회 수영장에서 연습과 친목 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 22,
    name: '등산 동호회',
    category: '체육',
    shortIntroduction: '주말마다 산을 오르며 체력과 인내심을 기릅니다.',
    recruitStatus: '모집중',
  },
  {
    id: 23,
    name: '요가 클래스',
    category: '체육',
    shortIntroduction: '몸과 마음의 균형을 위해 요가를 함께 합니다.',
    recruitStatus: '모집마감',
  },

  // 봉사
  {
    id: 24,
    name: '지역 봉사단',
    category: '봉사',
    shortIntroduction: '지역 사회에서 다양한 봉사활동을 실천합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 25,
    name: '해외 봉사단',
    category: '봉사',
    shortIntroduction: '방학 기간에 해외로 봉사활동을 나가는 모임입니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 26,
    name: '헌혈 캠페인 동아리',
    category: '봉사',
    shortIntroduction: '정기적으로 헌혈을 독려하고 참여합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 27,
    name: '장애인 지원 동아리',
    category: '봉사',
    shortIntroduction: '장애인과 함께하는 다양한 봉사 활동을 합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 28,
    name: '환경 봉사단',
    category: '봉사',
    shortIntroduction: '플로깅과 재활용 캠페인을 통해 환경을 지킵니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 29,
    name: '노인 돌봄 모임',
    category: '봉사',
    shortIntroduction: '양로원에서 어르신들과 시간을 보냅니다.',
    recruitStatus: '모집중',
  },
  {
    id: 30,
    name: '아이 돌봄 봉사단',
    category: '봉사',
    shortIntroduction: '지역 아동센터에서 교육 봉사를 진행합니다.',
    recruitStatus: '모집중',
  },
  {
    id: 31,
    name: '유기동물 보호 동아리',
    category: '봉사',
    shortIntroduction: '보호소에서 유기동물을 돌보고 입양을 돕습니다.',
    recruitStatus: '모집마감',
  },
  {
    id: 32,
    name: '다문화 지원 모임',
    category: '봉사',
    shortIntroduction: '이주민과 다문화 가정을 위한 활동을 합니다.',
    recruitStatus: '모집중',
  },
];

export const clubRepoitory = {
  getClubsByCategory: (filter: string) => {
    if (filter === '전체') return clubs;
    return clubs.filter((club) => club.category === filter);
  },
};
