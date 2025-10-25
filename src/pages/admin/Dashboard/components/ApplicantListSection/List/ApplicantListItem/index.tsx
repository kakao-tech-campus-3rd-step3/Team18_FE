import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';
import * as S from './index.styled';

type Props = ApplicantData & {
  onClick: (id: number) => void;
};

const STATUS_LABEL: Record<ApplicantData['status'], string> = {
  PENDING: '미정',
  REJECTED: '불합격',
  APPROVED: '합격',
};

export const ApplicantListItem = ({
  id,
  name,
  studentId,
  department,
  phoneNumber,
  email,
  status,
  onClick,
}: Props) => {
  return (
    <S.ItemWrapper onClick={() => onClick(id)}>
      <S.InfoText>{name || '-'}</S.InfoText>
      <S.InfoText>{studentId || '-'}</S.InfoText>
      <S.InfoText>{department || '-'}</S.InfoText>
      <S.InfoText>{phoneNumber || '-'}</S.InfoText>
      <S.InfoText>{email || '-'}</S.InfoText>
      <S.StatusBadge status={status}>{STATUS_LABEL[status] || '-'}</S.StatusBadge>
    </S.ItemWrapper>
  );
};
