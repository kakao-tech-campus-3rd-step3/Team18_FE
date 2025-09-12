import styled from '@emotion/styled';
import { ApplicantListItem } from './ApplicantListItem';
import { Button } from '@/shared/components/Button';
import { MOCK_APPLICANT_DATA_LIST } from './mock';
import { useNavigate } from 'react-router-dom';

export const ApplicantList = () => {
  const navigate = useNavigate();
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
        {MOCK_APPLICANT_DATA_LIST.map((applicant) => (
          <ApplicantListItem
            key={applicant.id}
            onClick={() => handleItemClick(applicant.id)}
            id={applicant.id}
            name={applicant.name}
            studentId={applicant.studentId}
            department={applicant.department}
            phone={applicant.phone}
            email={applicant.email}
            status={applicant.status}
          />
        ))}
      </ApplicantInfoDataList>
      <ButtonWrapper>
        <Button borderRadius={'lg'} color={'primary00'} width={'15rem'} opacity=''>
          결과 전송하기
        </Button>
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
