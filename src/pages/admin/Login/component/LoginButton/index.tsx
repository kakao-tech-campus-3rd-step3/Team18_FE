import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';

export const LoginButton = () => {
  return (
    <Container>
      <Button width='100%' type='submit'>
        {'로그인'}
      </Button>
      <KakaoButtonWrapper>
        <Button width='100%' type='submit'>
          <ButtonContent>
            <Icon src='/assets/kakao-icon.png' width={24} height={24} />
            <span>카카오 로그인</span>
          </ButtonContent>
        </Button>
      </KakaoButtonWrapper>
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
  gap: '10px 0',
});
const KakaoButtonWrapper = styled.div({
  width: '100%',
  '& button': {
    width: '100%',
    backgroundColor: '#FEE500',
    color: 'black',
    '&:hover': {
      backgroundColor: '#FFD600',
    },
  },
});

const ButtonContent = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  width: '100%',
  position: 'relative',
});

const Icon = styled.img({
  position: 'absolute',
  left: '16px',
  width: 20,
  height: 20,
});
