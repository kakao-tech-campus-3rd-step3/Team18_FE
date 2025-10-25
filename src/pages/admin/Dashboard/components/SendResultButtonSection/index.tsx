import { Button } from '@/shared/components/Button';
import styled from '@emotion/styled';

export const SendResultButtonSection = () => {
  return (
    <ButtonWrapper>
      <Button width={'15rem'}>결과 전송하기</Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  width: '100%',
});
