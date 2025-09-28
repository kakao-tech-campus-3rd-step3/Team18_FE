import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { mockClubDetail } from '../mock';
import { formatDate } from '@/utils/dateUtils';
import { useParams } from 'react-router-dom';

export const ClubInfoSidebarSection = () => {
  const {
    presidentName,
    presidentPhoneNumber,
    location,
    recruitStart,
    recruitEnd,
    regularMeetingInfo,
    recruitStatus,
    applicationNotice,
  } = mockClubDetail;

  const clubId = useParams();

  return (
    <SidebarContainer>
      <InfoItem>회장 이름: {presidentName}</InfoItem>
      <InfoItem>연락처: {presidentPhoneNumber}</InfoItem>
      <InfoItem>동방 위치: {location}</InfoItem>
      <InfoItem>
        모집 기간: {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </InfoItem>
      <InfoItem>정기 모임: {regularMeetingInfo}</InfoItem>
      <InfoItem>모집 상태: {recruitStatus}</InfoItem>
      <Button to={`/club/${clubId.id}/apply`}>지원하기</Button>
      <Notice>[지원 시 유의사항]</Notice>
      <Notice>{applicationNotice}</Notice>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));

const InfoItem = styled.div(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
