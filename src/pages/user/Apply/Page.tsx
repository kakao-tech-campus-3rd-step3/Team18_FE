import { ClubDescription } from '@/pages/user/Apply/components/ClubDescriptionSection/ClubDescription';
import { useParams } from 'react-router-dom';
import { useApplicationForm } from './hook/useApplicationForm';
import styled from '@emotion/styled';

export const ClubApplicatonPage = () => {
  const { id } = useParams();
  const formData = useApplicationForm(Number(id));

  if (!formData) return <div>Loading...</div>;

  return (
    <Layout>
      <FormContainer>
        <ClubDescription
          title={formData.title}
          description={formData?.description ?? ''}
        ></ClubDescription>
      </FormContainer>
    </Layout>
  );
};

export const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '5.2rem 3rem',
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    padding: '1.5rem',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    padding: '1rem',
  },
}));

export const FormContainer = styled.div({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.6rem 3rem',
  width: '80%',
  maxWidth: '1200px',
  margin: '0 auto',
  borderRadius: '4rem',
});
