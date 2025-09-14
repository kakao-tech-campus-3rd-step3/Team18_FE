export type Club = {
  id: number;
  clubName: string;
  location: string;
  category: string;
  shortIntroduction: string;
  introductionImages: string[];
  introductionIntroduce: string;
  introductionActivity: string;
  introductionWannabe: string;
  regularMeetingInfo: string;
  recruitStatus: string;
  presidentName: string;
  presidentPhoneNumber: string;
  recruitStart: string;
  recruitEnd: string;
};

export const mockClubDetail: Club = {
  id: 1,
  clubName: '인터엑스',
  location: '공7 201호',
  category: '사회연구',
  shortIntroduction: '사회문제에 관심 있는 사람들을 위한 동아리',
  introductionImages: [
    'https://plus.unsplash.com/premium_photo-1729880132913-4ca7d67f8eeb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1723917604890-418aa2307d2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1704756437707-e9fee5c04bcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1704756437647-559e43344877?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  introductionIntroduce: `인터엑스는 사회 문제를 깊이 있게 탐구하고 이를 해결하기 위해 다양한 활동을 기획하는 동아리입니다. 
  회원들은 토론, 조사, 캠페인 등을 통해 실제 사회 문제를 이해하고, 문제 해결을 위한 창의적 방법을 모색합니다. 
  학문적 연구와 실질적 활동을 병행하며, 서로의 생각을 존중하고 협력하는 문화를 지향합니다.`,
  introductionActivity: `동아리 활동으로는 매주 세미나와 그룹 토론, 지역 사회 봉사활동, 캠페인 기획 및 참여 등이 있습니다. 
  회원들은 각자의 관심 분야를 살려 프로젝트를 진행하며, 발표와 보고서를 통해 성과를 공유합니다. 
  또한 외부 전문가 초청 강연을 통해 사회 문제에 대한 이해를 넓히고, 실천 가능한 해결책을 모색합니다.`,
  introductionWannabe: `인터엑스에서는 성실하고 책임감 있는 인재를 기다립니다. 
  문제 해결에 관심이 많고 창의적 아이디어를 공유할 수 있는 사람, 
  팀원들과 협력하며 꾸준히 학습하고 성장하려는 자세를 가진 사람이라면 누구나 환영합니다.`,
  regularMeetingInfo: '매주 화요일 오후 6시',
  recruitStatus: '모집중',
  presidentName: '김춘식',
  presidentPhoneNumber: '010-9619-7677',
  recruitStart: '2025-09-03T00:00:00',
  recruitEnd: '2025-09-20T23:59:00',
};
