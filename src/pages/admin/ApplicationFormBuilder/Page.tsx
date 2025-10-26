import styled from '@emotion/styled';
import { ApplicationFormBuilderHeaderSection } from './components/HeaderSection';
import { ApplicationInfoSection } from './components/ApplicationInfoSection';
import { ApplicationFieldsFormTableSection } from './components/FieldsFormTableSection';

export const ApplicationFormBuilder = () => {
  return (
    <Layout>
      <ContentContainer>
        <ApplicationFormBuilderHeaderSection />
        <ApplicationInfoSection />
        <ApplicationFieldsFormTableSection />
      </ContentContainer>
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
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

const ContentContainer = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;
