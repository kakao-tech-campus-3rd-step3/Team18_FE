import { ApplicantProfileSection } from './components/ApplicantProfileSection/index';
import { ApplicantInfoSection } from './components/ApplicantInfoSection';
import { ApplicantQuestionSection } from './components/ApplicationQuestionSection';
import { CommentSection } from './components/CommentSection';
import { useDetailApplications } from './hooks/useDetailApplication';
import { useParams } from 'react-router-dom';
import * as S from './index.styled';

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
