import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicantListItem } from './ApplicantListItem';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  filterOption: ApplicationFilterOption;
};

export const ApplicantList = ({ filterOption }: Props) => {
  const navigate = useNavigate();

  const { data: applicants, isLoading, error } = useApplicants(1, filterOption);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

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
        {applicants.length > 0 ? (
          applicants.map((applicant) => (
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
          ))
        ) : (
          <EmptyMessage>
            {filterOption === 'ALL'
              ? '아직 지원자가 없습니다.'
              : `${filterOption === 'PENDING' ? '심사중' : filterOption === 'APPROVED' ? '합격' : '불합격'} 지원자가 없습니다.`}
          </EmptyMessage>
        )}
      </ApplicantInfoDataList>
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
});

const ApplicantInfoCategoryList = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 2fr 2fr 1fr',
  backgroundColor: '#F9FBFC',
  borderBottom: `1.8px solid ${theme.colors.gray100}`,
  padding: '1.7rem 0 1.5rem 0',
}));

const ApplicantInfoDataList = styled.div({
  padding: '0.4rem 0.8rem 0 0.8rem',
});

const CategoryText = styled.div(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.colors.textSecondary,
  textAlign: 'center',
}));

const EmptyMessage = styled.div(({ theme }) => ({
  padding: '4rem',
  textAlign: 'center',
  color: theme.colors.gray500,
  fontSize: '1.4rem',
}));

type ApplicateInfoCategory = '이름' | '학번' | '학과' | '전화번호' | '이메일' | '결과';
const INFO_CATEGORY: ApplicateInfoCategory[] = [
  '이름',
  '학번',
  '학과',
  '전화번호',
  '이메일',
  '결과',
];
