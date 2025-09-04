import styled from '@emotion/styled';
import { ApplicantListItem } from './ApplicantListItem';
import { MOCK_APPLICANT_DATA_LIST } from './mock';

export const ApplicantList = () => {
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
            name={applicant.name}
            studentId={applicant.studentId}
            department={applicant.department}
            phone={applicant.phone}
            email={applicant.email}
            status={applicant.status}
          />
        ))}
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
  gap: '2rem',
  paddingBottom: '2rem',
  borderBottom: `1px solid ${theme.colors.gray300}`,
}));

const ApplicantInfoDataList = styled.div(({ theme }) => ({
  paddingTop: '0.7rem',
}));

const CategoryText = styled.div(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
  textAlign: 'center',
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
