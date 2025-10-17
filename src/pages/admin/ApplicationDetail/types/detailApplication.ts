import type { ApplicationStatus } from '@/pages/admin/Dashboard/types/dashboard';

export type DetailApplication = {
  applicationId: number;
  status: ApplicationStatus;
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
