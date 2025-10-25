export type ClubReview = {
  id: number;
  writer: string;
  content: string;
  createdAt: string;
};

export type PostClubReviewRequest = {
  studentId: string;
  content: string;
};
