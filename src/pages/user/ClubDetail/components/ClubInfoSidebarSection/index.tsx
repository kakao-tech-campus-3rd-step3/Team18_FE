import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { formatDate } from '@/shared/utils/dateUtils';
import ApplyButton from './ApplyButton';
import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail';

type ClubInfoSidebarSectionProps = Pick<
  ClubDetail,
  | 'clubId'
  | 'clubName'
  | 'presidentName'
  | 'presidentPhoneNumber'
  | 'location'
  | 'recruitStart'
  | 'recruitEnd'
  | 'regularMeetingInfo'
  | 'recruitStatus'
  | 'applicationNotice'
  | 'isRegistered'
  | 'everyTimeUrl'
  | 'googleFormUrl'
  | 'instagramUrl'
>;

export const ClubInfoSidebarSection = ({
  clubId,
  clubName,
  presidentName,
  presidentPhoneNumber,
  location,
  recruitStart,
  recruitEnd,
  regularMeetingInfo,
  recruitStatus,
  applicationNotice,
  isRegistered,
  everyTimeUrl,
  googleFormUrl,
  instagramUrl,
}: ClubInfoSidebarSectionProps) => {
  return (
    <SidebarContainer>
      <InfoItem>회장 이름: {presidentName}</InfoItem>
      {!/^010-0000/.test(presidentPhoneNumber) && (
        <InfoItem>연락처: {presidentPhoneNumber}</InfoItem>
      )}
      <InfoItem>동방 위치: {location}</InfoItem>
      <InfoItem>
        모집 기간: {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </InfoItem>
      <InfoItem>정기 모임: {regularMeetingInfo}</InfoItem>
      <InfoItem>모집 상태: {recruitStatus}</InfoItem>
      {instagramUrl && (
        <Button
          variant='outline'
          onClick={() => {
            window.dataLayer?.push({
              event: 'click_instagram_button',
              club_id: clubId,
              club_name: clubName,
            });
            window.open(instagramUrl, '_blank');
          }}
          width='100%'
        >
          공식 인스타그램 보기
        </Button>
      )}
      <ApplyButton
        clubId={clubId}
        clubName={clubName}
        recruitStatus={recruitStatus}
        to={`/clubs/${clubId}/apply`}
        width={'auto'}
        isRegistered={isRegistered}
        everyTimeUrl={everyTimeUrl}
        googleFormUrl={googleFormUrl}
      />
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
