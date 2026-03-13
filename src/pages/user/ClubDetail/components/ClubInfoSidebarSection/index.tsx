import styled from '@emotion/styled';
import { BiListUl } from 'react-icons/bi';
import { PiCalendarDotsDuotone } from 'react-icons/pi';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
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
      <InfoItem>
        <InfoIcon>
          <BiListUl />
        </InfoIcon>
        <Text size='sm' color='#757575'>
          회장 이름
        </Text>
        {presidentName}
      </InfoItem>
      {!/^010-0000/.test(presidentPhoneNumber) && (
        <InfoItem>
          <InfoIcon>
            <BiListUl />
          </InfoIcon>
          <Text size='sm' color='#757575'>
            연락처
          </Text>
          {presidentPhoneNumber}
        </InfoItem>
      )}
      <InfoItem>
        <InfoIcon>
          <BiListUl />
        </InfoIcon>
        <Text size='sm' color='#757575'>
          동방 위치
        </Text>
        {location}
      </InfoItem>
      <InfoItem>
        <InfoIcon>
          <PiCalendarDotsDuotone />
        </InfoIcon>
        <Text size='sm' color='#757575'>
          모집 기간
        </Text>
        {formatDate(recruitStart)} ~ {formatDate(recruitEnd)}
      </InfoItem>
      <InfoItem>
        <InfoIcon>
          <BiListUl />
        </InfoIcon>
        <Text size='sm' color='#757575'>
          정기 모임
        </Text>
        {regularMeetingInfo}
      </InfoItem>
      <InfoItem>
        <InfoIcon>
          <BiListUl />
        </InfoIcon>
        <Text size='sm' color='#757575'>
          모집 상태
        </Text>
        {recruitStatus}
      </InfoItem>
      {instagramUrl && (
        <Button
          variant='outline'
          onClick={() => {
            window.dataLayer?.push({ event: 'club_instagram_click', clubId, clubName });
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
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const InfoIcon = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.textSecondary,
  flexShrink: 0,
  fontSize: '1.2rem',
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
