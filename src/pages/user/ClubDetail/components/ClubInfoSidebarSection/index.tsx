import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { formatDate } from '@/utils/dateUtils';
import { mockClubDetail } from '../mock';

export const ClubInfoSidebarSection = () => {
  const {
    presidentName,
    presidentPhoneNumber,
    location,
    recruitStart,
    recruitEnd,
    regularMeetingInfo,
    recruitStatus,
    applicationNotices,
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
      <Button to={`/club/${clubId.id}/apply`} width={'auto'}>
        지원하기
      </Button>
      <Notice>{applicationNotices}</Notice>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div(({ theme }) => ({
  marginTop: '1rem',
  backgroundColor: theme.colors.bg,
  padding: '1.3rem',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid #E5E7ED',
}));

const InfoItem = styled.div(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
