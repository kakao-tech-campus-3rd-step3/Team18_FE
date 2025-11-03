import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicantListItem } from '../ApplicantListItem';
import * as S from './index.styled';
import type {
  ApplicationFilterOption,
  ApplicationStage,
} from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  filterOption: ApplicationFilterOption;
  stage: ApplicationStage;
};

type ApplicateInfoCategory = '이름' | '학번' | '학과' | '전화번호' | '이메일' | '결과';
const INFO_CATEGORY: ApplicateInfoCategory[] = [
  '이름',
  '학번',
  '학과',
  '전화번호',
  '이메일',
  '결과',
];

export const ApplicantList = ({ filterOption, stage }: Props) => {
  const { clubId } = useParams();

  const navigate = useNavigate();

  const apiStage = stage === '서류' ? 'INTERVIEW' : 'FINAL';

  const {
    data: applicants,
    isLoading,
    error,
  } = useApplicants(Number(clubId), apiStage, filterOption);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

  const handleItemClick = useCallback(
    (applicantId: number) => {
      navigate(`/admin/clubs/${clubId}/applicants/${applicantId}`);
    },
    [clubId, navigate],
  );

  return (
    <S.Container>
      <S.ApplicantInfoCategoryList>
        {INFO_CATEGORY.map((category) => (
          <S.CategoryText key={category}>{category}</S.CategoryText>
        ))}
      </S.ApplicantInfoCategoryList>
      <S.ApplicantInfoDataList>
        {applicants.length > 0 ? (
          applicants.map((applicant) => (
            <ApplicantListItem
              key={applicant.applicantId}
              applicantId={applicant.applicantId}
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
          <S.EmptyMessage>
            {filterOption === 'ALL'
              ? '아직 지원자가 없습니다.'
              : `${filterOption === 'PENDING' ? '심사중' : filterOption === 'APPROVED' ? '합격' : '불합격'} 지원자가 없습니다.`}
          </S.EmptyMessage>
        )}
      </S.ApplicantInfoDataList>
    </S.Container>
  );
};
