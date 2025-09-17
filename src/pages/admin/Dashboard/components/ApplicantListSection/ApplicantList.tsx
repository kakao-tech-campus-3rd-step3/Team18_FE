import styled from '@emotion/styled';
import { ApplicantListItem } from './ApplicantListItem';
import { Button } from '@/shared/components/Button';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  filterOption: ApplicationFilterOption;
};

export const ApplicantList = ({ filterOption }: Props) => {
  const navigate = useNavigate();

  const { applicants, isLoading, isError } = useApplicants(1, filterOption);

  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  const handleItemClick = (applicantId: number) => {
    const clubId = 1;
    navigate(`/admin/clubs/${clubId}/applicants/${applicantId}`);
  };

  return (
    <Container>
      <ApplicantInfoCategoryList>
        {INFO_CATEGORY.map((category) => (
          <CategoryText key={category}>{category}</CategoryText>
        ))}
      </ApplicantInfoCategoryList>
      <ApplicantInfoDataList>
        {applicants.map((applicant) => (
          <ApplicantListItem
            key={applicant.id}
            id={applicant.id}
            name={applicant.name}
            studentId={applicant.studentId}
            department={applicant.department}
            phoneNumber={applicant.phoneNumber}
            email={applicant.email}
            status={applicant.status}
            onClick={handleItemClick}
          />
        ))}
      </ApplicantInfoDataList>
      <ButtonWrapper>
        <Button width={'15rem'}>결과 전송하기</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
});

const ApplicantInfoCategoryList = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 2fr 2fr 1fr',
  gap: '2rem',
  paddingBottom: '2rem',
  borderBottom: `1px solid ${theme.colors.gray300}`,
}));

const ApplicantInfoDataList = styled.div({
  paddingTop: '0.7rem',
});

const CategoryText = styled.div(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
  textAlign: 'center',
}));

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
  width: '100%',
});

type ApplicateInfoCategory = '이름' | '학번' | '학과' | '전화번호' | '이메일' | '결과';
const INFO_CATEGORY: ApplicateInfoCategory[] = [
  '이름',
  '학번',
  '학과',
  '전화번호',
  '이메일',
  '결과',
];
