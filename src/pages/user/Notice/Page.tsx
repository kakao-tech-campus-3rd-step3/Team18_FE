import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { mockNotices } from './mock';

export const NoticeListPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>공지사항</Title>
      <NoticeCard>
        {mockNotices.notices.map((notice) => (
          <NoticeRow key={notice.id} onClick={() => navigate(`/notices/${notice.id}`)}>
            <NoticeText>{notice.title}</NoticeText>
            <NoticeDate>
              {notice.createdAt.slice(0, 10)} <span>개발진</span>
            </NoticeDate>
          </NoticeRow>
        ))}
      </NoticeCard>
      <Footer>개발진과 연락하기 : jnupole004@gmail.com</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 0',
  backgroundColor: theme.colors.bg,
}));

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '40px',
}));

const NoticeCard = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.sm,
  padding: '24px 40px',
  border: `1px solid ${theme.colors.border}`,
}));

const NoticeRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 0',
  borderBottom: `1px solid ${theme.colors.border}`,
  cursor: 'pointer',
  transition: 'color 0.2s ease, transform 0.15s ease',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    fontWeight: theme.font.weight.bold,
    transform: 'translateY(-1px)',
  },
}));

const NoticeText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const NoticeDate = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
  span: {
    marginLeft: '8px',
    color: theme.colors.textSecondary,
  },
}));

const Footer = styled.p(({ theme }) => ({
  marginTop: '30px',
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
