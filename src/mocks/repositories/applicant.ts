import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

const applicants: ApplicantData[] = [
  {
    id: 1,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '미정',
  },
  {
    id: 2,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '합격',
  },
  {
    id: 3,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '불합격',
  },
  {
    id: 4,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '미정',
  },
];

export const detailApplication: DetailApplication = {
  applicationId: 123,
  status: 'PENDING',
  rating: 3.5,
  applicantInfo: {
    applicantId: 45,
    name: '김김김',
    department: '소프트웨어학과',
    studentId: '222222',
    email: 'kkkss@jun.ac.kr',
    phoneNumber: '010-1111-1111',
  },
  questionsAndAnswers: [
    {
      question: '지원하게 된 계기는 무엇인가요?',
      answer:
        '대학 시절 팀 프로젝트를 진행하면서 협업이 개인의 성장을 크게 가속한다는 사실을 체감했습니다. 다양한 사람들과 지식을 공유하고 피드백을 주고받으며 빠르게 성장할 수 있다는 점이 매력적이었습니다. 동아리가 바로 그런 환경을 제공한다고 생각해 지원했습니다.',
    },
    {
      question: '좋아하는 과일은 무엇인가요?',
      answer:
        '대학 시절 팀 프로젝트를 진행하면서 협업이 개인의 성장을 크게 가속한다는 사실을 체감했습니다. 다양한 사람들과 지식을 공유하고 피드백을 주고받으며 빠르게 성장할 수 있다는 점이 매력적이었습니다. 동아리가 바로 그런 환경을 제공한다고 생각해 지원했습니다.',
    },
    {
      question: '좋아하는 과일은 무엇인가요?',
      answer:
        '대학 시절 팀 프로젝트를 진행하면서 협업이 개인의 성장을 크게 가속한다는 사실을 체감했습니다. 다양한 사람들과 지식을 공유하고 피드백을 주고받으며 빠르게 성장할 수 있다는 점이 매력적이었습니다. 동아리가 바로 그런 환경을 제공한다고 생각해 지원했습니다.',
    },
    {
      question: '좋아하는 과일은 무엇인가요?',
      answer:
        '대학 시절 팀 프로젝트를 진행하면서 협업이 개인의 성장을 크게 가속한다는 사실을 체감했습니다. 다양한 사람들과 지식을 공유하고 피드백을 주고받으며 빠르게 성장할 수 있다는 점이 매력적이었습니다. 동아리가 바로 그런 환경을 제공한다고 생각해 지원했습니다.',
    },
  ],
};

export const applicantRepository = {
  getApplicantsResolver: (filter: string) => {
    if (filter === '전체') return applicants;
    return applicants.filter((applicant) => applicant.status === filter);
  },

  getDetailApplication: () => detailApplication,
};
