import styled from '@emotion/styled';
import { formatDate } from '@/utils/dateUtils';
import ApplyButton from './ApplyButton';
import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail';

type ClubInfoSidebarSectionProps = Pick<
  ClubDetail,
  | 'clubId'
  | 'presidentName'
  | 'presidentPhoneNumber'
  | 'location'
  | 'recruitStart'
  | 'recruitEnd'
  | 'regularMeetingInfo'
  | 'recruitStatus'
  | 'applicationNotice'
>;

export const ClubInfoSidebarSection = ({
  clubId,
  presidentName,
  presidentPhoneNumber,
  location,
  recruitStart,
  recruitEnd,
  regularMeetingInfo,
  recruitStatus,
  applicationNotice,
}: ClubInfoSidebarSectionProps) => {
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
      <ApplyButton recruitStatus={recruitStatus} to={`/clubs/${clubId}/apply`} width={'auto'}>
        지원하기
      </ApplyButton>
      <Notice>{applicationNotice}</Notice>
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
