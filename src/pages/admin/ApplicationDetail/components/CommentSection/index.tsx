import { useParams } from 'react-router-dom';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';

export const CommentSection = () => {
  const { applicantId } = useParams();

  const { data, isLoading, error, createComment } = useComments(Number(applicantId));

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

  return (
    <>
      <CommentForm createComment={createComment} />
      <CommentList comments={data} />
    </>
  );
};
