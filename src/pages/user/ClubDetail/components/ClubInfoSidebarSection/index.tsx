import styled from '@emotion/styled';
import { BiListUl } from 'react-icons/bi';
import { PiCalendarDotsDuotone } from 'react-icons/pi';
import { Button } from '@/shared/components/Button';
import { formatDate } from '@/shared/utils/dateUtils';
import ApplyButton from './ApplyButton';
import { ClubInfoRow } from './ClubInfoRow';
import type { ClubDetail } from '@/pages/user/ClubDetail/types/clubDetail';

type ClubInfoSidebarSectionProps = ClubDetail & { showApplyButton?: boolean };

export const ClubInfoSidebarSection = ({
  clubId,
  clubName,
  presidentName,
  // presidentPhoneNumber,
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
  showApplyButton = true,
}: ClubInfoSidebarSectionProps) => {
  return (
    <SidebarContainer>
      <ClubInfoRow icon={<BiListUl />} label='회장 이름' value={presidentName} />
      {/* {!/^010-0000/.test(presidentPhoneNumber) && (
        <ClubInfoRow icon={<BiListUl />} label='연락처' value={presidentPhoneNumber} />
      )} */}
      <ClubInfoRow icon={<BiListUl />} label='동방 위치' value={location} />
      <ClubInfoRow
        icon={<PiCalendarDotsDuotone />}
        label='모집 기간'
        value={`${formatDate(recruitStart)} ~ ${formatDate(recruitEnd)}`}
      />
      {regularMeetingInfo !== '-' && (
        <ClubInfoRow icon={<BiListUl />} label='정기 모임' value={regularMeetingInfo} />
      )}
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
      {showApplyButton && (
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
      )}
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

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    border: 'none',
    marginTop: 0,
    borderRadius: 0,
    padding: '0 0.5rem',
  },
}));

const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
  lineHeight: '1rem',

  [`@media (max-width: ${theme.breakpoints.web})`]: {
    paddingBottom: '1.8rem',
    borderBottom: '0.5px solid #E5E7ED',
  },
}));
