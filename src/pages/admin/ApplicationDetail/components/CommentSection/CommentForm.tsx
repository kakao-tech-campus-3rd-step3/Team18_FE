import styled from '@emotion/styled';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';

export const CommentForm = () => {
  return (
    <Layout>
      <Wrapper>
        <Text weight={'medium'}>댓글</Text>
      </Wrapper>
      <OutlineTextareaField />
    </Layout>
  );
};

const Layout = styled.div({
  display: 'flex',
  gap: '0.8rem',
  marginBottom: '3rem',
  flexDirection: 'column',
});

const Wrapper = styled.div(() => ({
  display: 'flex',
  gap: '16px',
}));
