import type { Club } from '@/types/club.ts';

export const clubs: Club[] = [
  // 문예
  {
    id: 1,
    name: '시향 동아리',
    category: '문예',
    short_Introduction: '시를 쓰고 낭송하며 문학적 감성을 키우는 모임입니다.',
    recruit_status: '모집중',
  },
  {
    id: 2,
    name: '소설창작회',
    category: '문예',
    short_Introduction: '단편 소설을 집필하고 합평회를 진행합니다.',
    recruit_status: '모집마감',
  },

  // 학술
  {
    id: 3,
    name: 'AI 연구회',
    category: '학술',
    short_Introduction: '머신러닝과 인공지능 논문을 함께 읽고 프로젝트를 진행합니다.',
    recruit_status: '모집중',
  },
  {
    id: 4,
    name: '경제 토론 동아리',
    category: '학술',
    short_Introduction: '경제 현안을 주제로 토론과 발표를 진행합니다.',
    recruit_status: '모집중',
  },

  // 종교
  {
    id: 5,
    name: '기독교 학생회',
    category: '종교',
    short_Introduction: '성경 공부와 봉사활동을 함께하는 모임입니다.',
    recruit_status: '모집마감',
  },
  {
    id: 6,
    name: '불교 명상회',
    category: '종교',
    short_Introduction: '명상을 통해 마음 수양과 수행을 함께합니다.',
    recruit_status: '모집중',
  },

  // 체육
  {
    id: 7,
    name: '풋살 클럽',
    category: '체육',
    short_Introduction: '주말마다 풋살 경기를 즐기며 친목을 다집니다.',
    recruit_status: '모집중',
  },
  {
    id: 8,
    name: '배드민턴 동아리',
    category: '체육',
    short_Introduction: '초보부터 고수까지 함께 치는 배드민턴 모임입니다.',
    recruit_status: '모집마감',
  },

  // 봉사
  {
    id: 9,
    name: '지역 봉사단',
    category: '봉사',
    short_Introduction: '지역 사회에서 다양한 봉사활동을 실천합니다.',
    recruit_status: '모집중',
  },
  {
    id: 10,
    name: '해외 봉사단',
    category: '봉사',
    short_Introduction: '방학 기간에 해외로 봉사활동을 나가는 모임입니다.',
    recruit_status: '모집마감',
  },
];

export const clubRepoitory = {
  getClubsByCategory: (filter: string) => {
    if (filter === '전체') return clubs;
    return clubs.filter((club) => club.category === filter);
  },
};
