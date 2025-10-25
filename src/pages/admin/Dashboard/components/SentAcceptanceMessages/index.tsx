import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import styled from '@emotion/styled';

export const SentAcceptanceMessages = () => {
  return (
    <Container>
      <Text size='lg'>합격자에게 전송될 메세지</Text>
      <OutlineTextareaField />
    </Container>
  );
};

const Container = styled.div({
  margin: '3rem 1.7rem 0 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});
