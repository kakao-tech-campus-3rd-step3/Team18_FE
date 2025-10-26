import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { mockNoticeDetail } from './mock';

export const NoticeDetailPage = () => {
  const navigate = useNavigate();
  const data = mockNoticeDetail;

  return (
    <Wrapper>
      <Card>
        <Title>{data.title}</Title>
        <MetaWrapper>
          <MetaItem>
            <Label>작성자</Label> {data.author}
          </MetaItem>
          <MetaItem>
            <Label>문의처</Label> {data.email}
          </MetaItem>
        </MetaWrapper>
        <MetaWrapper>
          <MetaItem>
            <Label>작성일</Label> {data.createdAt.slice(0, 10)}
          </MetaItem>
          <MetaItem>
            <Label>첨부파일</Label> {data.file}
          </MetaItem>
        </MetaWrapper>
        <Content>{data.content}</Content>
        <Button onClick={() => navigate('/notices')}>목록</Button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '60px 0',
  backgroundColor: theme.colors.bg,
}));

const Card = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.sm,
  padding: '40px 60px',
  border: `1px solid ${theme.colors.border}`,
}));

const Title = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
  marginBottom: '32px',
}));

const MetaWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '80px',
  marginBottom: '16px',
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
}));

const MetaItem = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Label = styled.span(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  marginRight: '6px',
  color: theme.colors.textPrimary,
}));

const Content = styled.pre(({ theme }) => ({
  marginTop: '56px',
  fontSize: theme.font.size.sm,
  lineHeight: 1.6,
  color: theme.colors.textPrimary,
  whiteSpace: 'pre-wrap',
}));

const Button = styled.button(({ theme }) => ({
  display: 'block',
  marginLeft: 'auto',
  marginTop: '40px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  border: 'none',
  borderRadius: theme.radius.sm,
  padding: '6px 14px',
  fontSize: theme.font.size.xs,
  cursor: 'pointer',
  transition: '0.2s ease',
  '&:hover': {
    backgroundColor: theme.colors.primary700,
    transform: 'translateY(-1px)',
  },
}));
