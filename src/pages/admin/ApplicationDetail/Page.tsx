import styled from '@emotion/styled';
import { ApplicantProfileSection } from './components/ApplicantProfileSection/index';
import { ApplicantInfoSection } from './components/ApplicantInfoSection';
import { ApplicantQuestionSection } from './components/ApplicationQuestionSection';
import { CommentSection } from './components/CommentSection';
import { useDetailApplications } from './hooks/useDetailApplication';
import { useParams } from 'react-router-dom';

export const ApplicationDetailPage = () => {
  const { clubId, applicantId } = useParams();

  const {
    data: detailApplicants,
    isLoading,
    error,
    updateStatus,
  } = useDetailApplications(Number(clubId), Number(applicantId));

  if (isLoading) return <div> 로딩중</div>;
  if (error) return <div>에러발생 : {error.message}</div>;

  return (
    <Layout>
      <ApplicationDetailView>
        <ApplicantProfileSection
          name={detailApplicants?.applicantInfo.name}
          department={detailApplicants?.applicantInfo.department}
          status={detailApplicants?.status}
          rating={detailApplicants?.rating}
          updateStatus={updateStatus}
        />
        <ApplicantInfoSection
          studentId={detailApplicants?.applicantInfo.studentId}
          email={detailApplicants?.applicantInfo.email}
          phoneNumber={detailApplicants?.applicantInfo.phoneNumber}
        />
        <ApplicantQuestionSection
          questionsAndAnswers={detailApplicants?.questionsAndAnswers || []}
        />
      </ApplicationDetailView>
      <CommentView>
        <CommentSection />
      </CommentView>
    </Layout>
  );
};

const Layout = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.bgBlue,
  height: '100vh',
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
  padding: '45px',
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
