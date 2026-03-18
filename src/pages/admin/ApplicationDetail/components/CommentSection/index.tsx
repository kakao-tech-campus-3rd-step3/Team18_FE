import { useParams } from 'react-router-dom';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const CommentSection = () => {
  const { applicantId } = useParams();

  const { data, createComment } = useComments(Number(applicantId));

  return (
    <>
      <CommentForm createComment={createComment} />
      <CommentList comments={data} />
    </>
  );
};
