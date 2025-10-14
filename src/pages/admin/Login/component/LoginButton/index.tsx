import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

export const LoginButton = () => {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <Container>
      <Button width='100%' type='button'>
        {'로그인'}
      </Button>
      <Button to='/signup' width='100%' type='button'>
        {'회원가입'}
      </Button>
      <KakaoButtonWrapper>
        <Button width='100%' type='button' onClick={handleKakaoLogin}>
          <ButtonContent>
            <Icon src='/assets/kakao-icon.png' width={24} height={24} />
            {'카카오 로그인'}
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
