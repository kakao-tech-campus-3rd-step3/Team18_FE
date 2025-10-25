import { CommentItem } from './CommentItem/CommentItem';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = {
  comments: Comment[];
};

export const CommentList = ({ comments }: Props) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.commentId}
          commentId={comment.commentId}
          content={comment.content}
          author={comment.author}
          createdAt={comment.createdAt.split('T')[0]}
          rating={comment.rating}
        />
      ))}
    </div>
  );
};
