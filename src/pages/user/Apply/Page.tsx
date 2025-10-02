import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { ClubDescription } from '@/pages/user/Apply/components/ClubDescriptionSection';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicationForm } from './components/ApplicationForm';
import { useApplicationForm } from './hook/useApplicationForm';

export const ClubApplicationPage = () => {
  const { clubId } = useParams();

  const formData = useApplicationForm(Number(clubId));

  if (!formData) return <LoadingSpinner />;

  return (
    <Layout>
      <ContentContainer>
        <ClubDescription title={formData.title} description={formData?.description ?? ''} />
        <ApplicationForm questions={formData.questions} />
      </ContentContainer>
    </Layout>
  );
};

const ContentContainer = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const Layout = styled.main(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto 4rem auto',
  padding: '0 1.5rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '1.5rem',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1rem',
  },
}));
