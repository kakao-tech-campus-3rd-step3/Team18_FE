import styled from '@emotion/styled';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useKakaoLogin } from './hooks/useKakaoLogin';

export const KakaoCallback = () => {
  const { isLoading } = useKakaoLogin();
  if (isLoading) return;
  <LoadingSpinnerWrapper>
    <LoadingSpinner />;
  </LoadingSpinnerWrapper>;
  return null;
};

const LoadingSpinnerWrapper = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
