import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

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

export const applicantRepository = {
  getApplicantsResolver: (filter: string) => {
    if (filter === '전체') return applicants;
    return applicants.filter((applicant) => applicant.status === filter);
  },
};
