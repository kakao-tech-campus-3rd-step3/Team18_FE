import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';

type Props = {
  studentId?: string;
  email?: string;
  phoneNumber?: string;
};
export const ApplicantInfoSection = ({ studentId, email, phoneNumber }: Props) => {
  return (
    <Layout>
      <Title>
        <Text weight='bold' size='lg'>
          개인정보
        </Text>
      </Title>
      <InfoContainer>
        <Wrapper>
          <Text color='#616677'>학번</Text>
          <Text>{studentId || '-'}</Text>
        </Wrapper>
        <Wrapper>
          <Text color='#616677'>이메일</Text>
          <Text>{email || '-'}</Text>
        </Wrapper>
        <Wrapper>
          <Text color='#616677'>전화번호</Text>
          <Text>{phoneNumber || '-'}</Text>
        </Wrapper>
      </InfoContainer>
    </Layout>
  );
};

const Layout = styled.div(({ theme }) => ({
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: theme.radius.lg,
  padding: '24px',
  backgroundColor: 'white',
}));

const Title = styled.div(() => ({
  marginBottom: '2.5rem',
}));

const InfoContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
}));

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  flex: 1,
  gap: '1.2rem',
}));
