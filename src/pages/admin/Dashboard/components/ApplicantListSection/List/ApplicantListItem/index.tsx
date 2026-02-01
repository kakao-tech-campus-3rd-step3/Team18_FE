import React from 'react';
import * as S from './index.styled';
import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

type Props = ApplicantData & {
  onClick: (id: number) => void;
};

const STATUS_LABEL: Record<ApplicantData['status'], string> = {
  PENDING: '미정',
  REJECTED: '불합격',
  APPROVED: '합격',
};

export const ApplicantListItem = React.memo(function ApplicantListItem({
  applicantId,
  name,
  studentId,
  department,
  phoneNumber,
  email,
  status,
  confirmedTime,
  onClick,
}: Props) {
  const handleTimeSetterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 모달 열기
  };

  return (
    <S.ItemWrapper onClick={() => onClick(applicantId)}>
      <S.InfoText>{name || '-'}</S.InfoText>
      <S.InfoText>{studentId || '-'}</S.InfoText>
      <S.InfoText>{department || '-'}</S.InfoText>
      <S.InfoText>{phoneNumber || '-'}</S.InfoText>
      <S.InfoText>{email || '-'}</S.InfoText>
      <S.StatusBadge status={status}>{STATUS_LABEL[status] || '-'}</S.StatusBadge>
      {status === 'APPROVED' ? (
        <S.InfoText>
          {confirmedTime || <S.TimeSetter onClick={handleTimeSetterClick}>시간 선택</S.TimeSetter>}
        </S.InfoText>
      ) : (
        <S.InfoText>-</S.InfoText>
      )}
    </S.ItemWrapper>
  );
});
