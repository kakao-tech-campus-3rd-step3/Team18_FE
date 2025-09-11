import styled from '@emotion/styled';
import { ApplicantProfileSection } from './components/ApplicantProfileSection/indext';
import { ApplicantInfoSection } from './components/ApplicantInfoSection';
import { ApplicantQuestionSection } from './components/ApplicationQuestionSection';
import { CommentSection } from './components/CommentSection';

export const ApplicationDetailPage = () => {
  return (
    <Layout>
      <ApplicationDetailView>
        <ApplicantProfileSection />
        <ApplicantInfoSection />
        <ApplicantQuestionSection />
      </ApplicationDetailView>
      <CommentView>
        <CommentSection />
      </CommentView>
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  height: 'calc(100vh - 2.6rem)',
  display: 'flex',
  flexDirection: 'row',

  '@media (max-width: 60.72669rem)': {
    flexDirection: 'column',
  },
}));

const ApplicationDetailView = styled.section(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  width: '66%',
  height: 'calc(100vh - 5rem)',
  padding: '32px 32px 0 32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  minWidth: 0,

  '@media (max-width: 60.72669rem)': {
    width: '100%',
    flex: 'none',
  },
}));

const CommentView = styled.section(({ theme }) => ({
  width: '34%',
  backgroundColor: theme.colors.bg,
  borderRadius: '2rem 2rem 0 0',
  padding: '24px',
  margin: '4rem 2rem 0 2rem',
  flexShrink: 0,

  '@media (max-width: 60.72669rem)': {
    width: '100%',
    minHeight: '300px',
    marginRight: '5rem',
  },
}));
