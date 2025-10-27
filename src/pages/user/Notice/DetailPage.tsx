import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { NoticeDetailCardSection } from './components/NoticeDetailCardSection';
import { mockNoticeDetail } from './mock';

export const NoticeDetailPage = () => {
  const navigate = useNavigate();
  const data = mockNoticeDetail;

  return (
    <Wrapper>
      <NoticeDetailCardSection data={data} onBack={() => navigate(-1)} />
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '60px 0',
  backgroundColor: theme.colors.bg,
}));
