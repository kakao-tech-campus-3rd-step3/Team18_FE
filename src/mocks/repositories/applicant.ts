import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';
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

export const comments = [
  {
    commentId: 20,
    content: '지원자의 경험이 우리 동아리와 잘 맞는 것 같습니다.',
    rating: 4.5,
    author: {
      id: 5,
      name: '김운영',
    },
    createdAt: '2025-10-02T12:20:54.974Z',
    updatedAt: '2025-10-02T12:20:54.974Z',
  },
  {
    commentId: 21,
    content: '지원자의 경험이 우리 동아리와 잘 맞는 것 같습니다.',
    rating: 4.5,
    author: {
      id: 6,
      name: '김호영',
    },
    createdAt: '2025-10-03T12:20:54.974Z',
    updatedAt: '2025-10-03T12:20:54.974Z',
  },
  {
    commentId: 22,
    content: '지원자의 경험이 우리 동아리와 잘 맞는 것 같습니다.',
    rating: 4.5,
    author: {
      id: 7,
      name: '김자영',
    },
    createdAt: '2025-10-04T12:20:54.974Z',
    updatedAt: '2025-10-04T12:20:54.974Z',
  },
];

export const createComment = (content: string, rating: number) => {
  const newComment = {
    commentId: comments.length + 1,
    content,
    rating,
    author: {
      id: 103,
      name: '박영희',
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  comments.push(newComment);
  return newComment;
};

export const deleteComment = (commentId: number) => {
  const index = comments.findIndex((comment) => comment.commentId === commentId);
  if (index !== -1) {
    comments.splice(index, 1);
    return { success: true };
  }
  return { success: false };
};

export const applicantRepository = {
  getApplicants: (status: string | null) => {
    const statusLabelMap: Record<string, string> = {
      ACCEPTED: '합격',
      REJECTED: '불합격',
      PENDING: '미정',
    };

    if (!status || status === 'ALL') {
      return applicants;
    }

    const mappedStatus = statusLabelMap[status];
    if (!mappedStatus) {
      return applicants;
    }

    return applicants.filter((applicant) => applicant.status === mappedStatus);
  },

  getDetailApplication: () => {
    return detailApplication;
  },

  updateApplicationStatus: (applicationId: number, status: DetailApplication['status']) => {
    if (detailApplication.applicationId === applicationId) {
      detailApplication.status = status;
      return { success: true };
    }
    return { success: false };
  },

  getComments: () => {
    return comments;
  },

  createComment: (content: string, rating: number) => {
    return createComment(content, rating);
  },

  deleteComment: (commentId: number) => {
    return deleteComment(commentId);
  },
};
