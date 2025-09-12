import styled from '@emotion/styled';
import ClubHeaderSection from './components/ClubHeaderSection';
import ClubActivityPhotosSection from './components/ClubActivityPhotosSection';
import ClubDescriptionSection from './components/ClubDescriptionSection';
import ClubReviewsSection from './components/ClubReviewsSection';
import ClubInfoSidebarSection from './components/ClubInfoSidebarSection';

export const ClubDetailPage = () => {
  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection />
        <ClubActivityPhotosSection />
        <ClubDescriptionSection />
        <ClubReviewsSection />
      </ContentLeft>
      <ContentRight>
        <ClubInfoSidebarSection />
      </ContentRight>
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  minHeight: '100vh',
  padding: '2.6rem 3rem',
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
}));

const ContentLeft = styled.div(({ theme }) => ({
  flex: '1 1 0',
  backgroundColor: theme.colors.bg,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1.5rem',
  boxSizing: 'border-box',
  minWidth: '25rem',
  borderRadius: '1.5rem',
  minHeight: '20rem',
}));

const ContentRight = styled.div(({ theme }) => ({
  flex: '0 0 25rem',
  backgroundColor: theme.colors.bg,
  padding: '1.5rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1.5rem',
  height: 'auto',
  alignSelf: 'flex-start',

  '@media (max-width: 56.25rem)': {
    flex: '1 1 100%',
    maxWidth: '31.25rem',
    margin: '1.5rem auto 0 auto',
  },
}));
