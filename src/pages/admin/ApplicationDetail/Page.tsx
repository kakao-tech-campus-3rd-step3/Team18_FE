import { useParams } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicantInfoSection } from './components/ApplicantInfoSection';
import { ApplicantProfileSection } from './components/ApplicantProfileSection/index';
import { ApplicantQuestionSection } from './components/ApplicationQuestionSection';
import { CommentSection } from './components/CommentSection';
import { useDetailApplications } from './hooks/useDetailApplication';
import * as S from './index.styled';

export const ApplicationDetailPage = () => {
  const { clubId, applicantId } = useParams();
  const { user } = useAuth();

  const {
    data: detailApplicants,
    isLoading,
    error,
    updateStatus,
  } = useDetailApplications(Number(clubId), Number(applicantId));

  if (isLoading || !user) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

  if (user.clubId !== Number(clubId)) {
    return <div>권한이 없습니다.</div>;
  }

  return (
    <S.PageLayout>
      <S.MainContent>
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
      </S.MainContent>
      <S.AsideContent>
        <CommentSection />
      </S.AsideContent>
    </S.PageLayout>
  );
};
