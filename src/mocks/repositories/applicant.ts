import type { ApplicantData } from '@/types/dashboard';

const applicants: ApplicantData[] = [
  {
    id: 1,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '미정',
    submittedAt: '2025-09-02T02:41:38',
  },
  {
    id: 2,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '합격',
    submittedAt: '2025-09-02T02:41:38',
  },
  {
    id: 3,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '불합격',
    submittedAt: '2025-09-02T02:41:38',
  },
  {
    id: 4,
    name: '김동글',
    studentId: '234567',
    department: '소프트웨어공학과',
    phoneNumber: '010-1010-1010',
    email: 'ddd@naver.com',
    status: '미정',
    submittedAt: '2025-09-02T02:41:38',
  },
];

export const applicantRepository = {
  getApplicants: () => applicants,
};
