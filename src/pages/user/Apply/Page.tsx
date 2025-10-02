import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { ClubDescription } from '@/pages/user/Apply/components/ClubDescriptionSection';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicationForm } from './components/ApplicationForm';
import { useApplicationForm } from './hook/useApplicationForm';

export const ClubApplicationPage = () => {
  const { id } = useParams();
  const formData = useApplicationForm(Number(id));

  if (!formData) return <LoadingSpinner />;

  return (
    <Layout>
      <ClubDescription title={formData.title} description={formData?.description ?? ''} />
      <ApplicationForm questions={formData.questions} />
    </Layout>
  );
};

export const Layout = styled.main(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 1.5rem',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '1.5rem',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    padding: '1rem',
  },
}));
