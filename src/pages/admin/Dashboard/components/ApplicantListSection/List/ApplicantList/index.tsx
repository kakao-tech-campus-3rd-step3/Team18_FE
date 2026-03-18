import { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApplicants } from '@/pages/admin/Dashboard/hooks/useApplicants';
import { STAGE_LABEL } from '@/pages/admin/Dashboard/utils/labelMap';
import { ApplicantListItem } from '../ApplicantListItem';
import * as S from './index.styled';
import type {
  ApplicateInfoCategory,
  ApplicationFilterOption,
  ApplicationStage,
} from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  filterOption: ApplicationFilterOption;
  stage: ApplicationStage;
};

export const ApplicantList = ({ filterOption, stage }: Props) => {
  const { clubId } = useParams();
  const navigate = useNavigate();

  const apiStage = STAGE_LABEL[stage];

  const {
    data: applicants,
    interviewSchedule,
    interviewRequired,
  } = useApplicants(Number(clubId), apiStage, filterOption);

  const showInterviewColumn = interviewRequired && stage === '서류';

  const categories = useMemo(() => {
    const base: ApplicateInfoCategory[] = ['이름', '학번', '학과', '전화번호', '이메일', '결과'];
    return showInterviewColumn ? [...base, '면접 시간'] : base;
  }, [showInterviewColumn]);

  const handleItemClick = useCallback(
    (applicantId: number) => {
      navigate(`/admin/clubs/${clubId}/applicants/${applicantId}`);
    },
    [clubId, navigate],
  );

  return (
    <S.Container>
      <S.ApplicantInfoCategoryList hasInterview={showInterviewColumn}>
        {categories.map((category) => (
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
              confirmedTime={applicant.confirmedTime}
              interviewInfo={applicant.interviewInfo}
              interviewSchedule={interviewSchedule}
              interviewRequired={showInterviewColumn}
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
