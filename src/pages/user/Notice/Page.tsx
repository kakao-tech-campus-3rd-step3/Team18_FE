import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import { NoticeListCardSection } from './components/NoticeListCardSection';

export const NoticeListPage = () => {
  return (
    <Wrapper>
      <Text size='xl' weight='bold' color='#000000'>
        공지사항
      </Text>
      <NoticeListCardSection />
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

const Footer = styled.p(({ theme }) => ({
  marginTop: '30px',
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
