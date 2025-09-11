export type DetailApplication = {
  applicationId: number;
  status: string;
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
