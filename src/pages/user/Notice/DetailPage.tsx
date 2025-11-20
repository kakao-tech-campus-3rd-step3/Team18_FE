import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { NoticeDetailCardSection } from './components/NoticeDetailCardSection';

export const NoticeDetailPage = () => {
  const navigate = useNavigate();
  const { noticeId: noticeIdParam } = useParams<{ noticeId: string }>();
  const noticeId = noticeIdParam ? Number(noticeIdParam) : null;

  if (!noticeId) {
    return (
      <Wrapper>
        <p>잘못된 접근입니다.</p>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <NoticeDetailCardSection noticeId={noticeId} onBack={() => navigate(-1)} />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px',
  marginTop: '30px',
  minHeight: 'calc(100vh - 250px)',
  alignItems: 'flex-start',
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    padding: '20px 16px',
    marginTop: '24px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '16px',
    marginTop: '20px',
  },
}));
