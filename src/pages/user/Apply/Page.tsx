import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { ClubDescription } from '@/pages/user/Apply/components/ClubDescriptionSection';
import { useClubDetail } from '@/pages/user/ClubDetail/hooks/useClubDetail';
import { ApplicationForm } from './components/ApplicationForm';
import { RecruitClosedSection } from './components/RecruitClosedSection';
import { useApplicationForm } from './hooks/useApplicationForm';

// 모집중일 때만 마운트되어 지원폼을 조회한다(모집 기간 외에는 폼 API를 호출하지 않는다).
const ApplicationFormContent = ({ clubId }: { clubId: number }) => {
  const formData = useApplicationForm(clubId);

  return (
    <ContentContainer>
      <ClubDescription title={formData.title} description={formData?.description ?? ''} />
      <ApplicationForm questions={formData.formQuestions} clubName={formData.title} />
    </ContentContainer>
  );
};

export const ClubApplicationPage = () => {
  const { clubId } = useParams();
  const club = useClubDetail(Number(clubId));
  const isRecruiting = club.recruitStatus === '모집중';

  return (
    <Layout>
      {isRecruiting ? (
        <ApplicationFormContent clubId={Number(clubId)} />
      ) : (
        <RecruitClosedSection clubId={Number(clubId)} />
      )}
    </Layout>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
