import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId'>;

export const CommentItem = ({ author, commentId, content, createdAt }: Props) => {
  const { applicantId } = useParams();

  const { deleteComment } = useComments(Number(applicantId));

  const handleEdit = () => {
    console.log('수정 클릭');
  };

  const handleDelete = () => {
    deleteComment(commentId);
  };

  return (
    <Layout>
      <Header>
        <AuthorInfo>
          <Text size={'base'} weight={'medium'}>
            {author.name}
          </Text>
          <Text size={'xs'} weight={'medium'} color={'#616677'}>
            {createdAt}
          </Text>
        </AuthorInfo>
        <ButtonContainer>
          <ActionButton onClick={handleEdit}>수정</ActionButton>
          <Divider>|</Divider>
          <ActionButton onClick={handleDelete}>삭제</ActionButton>
        </ButtonContainer>
      </Header>
      <CommentContent>
        <Text size={'sm'} color={'#333'}>
          {content}
        </Text>
      </CommentContent>
    </Layout>
  );
};

const Layout = styled.div(({ theme }) => ({
  borderLeft: `3px solid ${theme.colors.primary}`,
  paddingLeft: '1rem',
  marginBottom: '2.4rem',
}));

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.9375rem',
});

const AuthorInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

const ButtonContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

const ActionButton = styled.div(({ theme }) => ({
  background: 'none',
  border: 'none',
  color: theme.colors.gray600,
  fontSize: '0.8rem',
  cursor: 'pointer',
  padding: '0.25rem',
}));

const Divider = styled.span(({ theme }) => ({
  color: theme.colors.gray200,
  fontSize: '0.875rem',
  margin: '0 0.25rem',
}));

const CommentContent = styled.div({
  lineHeight: '1.6',
});
