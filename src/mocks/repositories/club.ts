const clubs = [
  {
    id: 1,
    name: '동아리1',
    category: '사회연구',
    short_Introduction: '지역 사회문제를 탐구하고 해결 방안을 모색합니다.',
    recruit_status: '모집중',
  },
  {
    id: 2,
    name: '동아리2',
    category: '예술',
    short_Introduction: '창작 활동과 전시회를 통해 예술적 감각을 키워요.',
    recruit_status: '모집마감',
  },
  {
    id: 3,
    name: '동아리3',
    category: '체육',
    short_Introduction: '주 2회 모여 풋살과 농구 등 다양한 운동을 즐깁니다.',
    recruit_status: '모집중',
  },
  {
    id: 4,
    name: '동아리4',
    category: '공학',
    short_Introduction: '로봇 제작과 프로그래밍 스터디를 진행합니다.',
    recruit_status: '모집마감',
  },
  {
    id: 5,
    name: '동아리5',
    category: '문학',
    short_Introduction: '시와 소설을 함께 읽고 창작 작품을 공유합니다.',
    recruit_status: '모집중',
  },
  {
    id: 6,
    name: '동아리6',
    category: '음악',
    short_Introduction: '버스킹 공연을 준비하고 합주 연습을 해요.',
    recruit_status: '모집중',
  },
  {
    id: 7,
    name: '동아리7',
    category: '봉사',
    short_Introduction: '지역 아동센터와 협력해 봉사활동을 진행합니다.',
    recruit_status: '모집마감',
  },
  {
    id: 8,
    name: '동아리8',
    category: 'IT',
    short_Introduction: '웹 서비스와 앱 개발 프로젝트를 함께 만들어요.',
    recruit_status: '모집중',
  },
];

export const clubRepoitory = {
  getClubs: () => clubs,
};
