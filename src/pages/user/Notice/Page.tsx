import styled from '@emotion/styled';
import { CONTACT_EMAIL } from '@/app/constants/email';
import { Text } from '@/shared/components/Text';
import { NoticeListCardSection } from './components/NoticeListCardSection';

export const NoticeListPage = () => {
  return (
    <Wrapper>
      <Text size='xl' weight='bold' color='#000000'>
        공지사항
      </Text>
      <NoticeListCardSection />
      <ContactInfo>개발진과 연락하기 : {CONTACT_EMAIL}</ContactInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '60px 0',
  backgroundColor: theme.colors.bg,
  minHeight: 'calc(100vh - 291px)',
}));

const ContactInfo = styled.p(({ theme }) => ({
  marginTop: '30px',
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
