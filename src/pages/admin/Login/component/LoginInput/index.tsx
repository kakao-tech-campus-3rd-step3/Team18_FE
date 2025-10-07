import styled from '@emotion/styled';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';

export const LoginInput = () => {
  return (
    <Container>
      <InputWrapper>
        <OutlineInputField placeholder='' />
        <PlaceHolderText>아이디</PlaceHolderText>
      </InputWrapper>

      <InputWrapper>
        <OutlineInputField placeholder='' />
        <PlaceHolderText>비밀번호</PlaceHolderText>
      </InputWrapper>
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

const InputWrapper = styled.div({
  position: 'relative',
  width: '100%',

  '& input:focus + label': {
    top: -8,
    left: 8,
    fontSize: 12,
    background: 'white',
    padding: '0 4px',
    color: '#000',
  },
});

const PlaceHolderText = styled.label({
  position: 'absolute',
  top: 14,
  left: 10,
  color: '#888',
  pointerEvents: 'none',
  transition: '0.2s ease all',
});
