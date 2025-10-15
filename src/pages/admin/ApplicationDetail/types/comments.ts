export type Comment = {
  commentId: number;
  content: string;
  rating: number;
  author: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};
