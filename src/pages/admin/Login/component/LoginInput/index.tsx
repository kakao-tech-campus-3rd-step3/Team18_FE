import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import styled from '@emotion/styled';

export const LoginInput = () => {
  return (
    <Container>
      <OutlineInputField />
      <OutlineInputField />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: 300,
  padding: '0 0 30px 0',
  gap: '40px 0',
});
