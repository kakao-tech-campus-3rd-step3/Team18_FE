import type { ApplicantStatus } from '@/types/dashboard';

export type DetailApplication = {
  applicationId: number;
  status: ApplicantStatus;
  rating: number;
  applicantInfo: {
    applicantId: number;
    name: string;
    department: string;
    studentId: string;
    email: string;
    phoneNumber: string;
  };
  questionsAndAnswers: {
    question: string;
    answer: string;
  }[];
};
