import ReactGA from 'react-ga4';
import { Button } from '@/shared/components/Button';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

type Props = {
  recruitStatus: RecruitStatus;
  to: string;
  width?: string;
  children?: React.ReactNode;
  clubName?: string;
};

const ApplyButton = ({ recruitStatus, to, width, clubName }: Props) => {
  const isRecruiting = recruitStatus === '모집중';

  const applyButtonProps = {
    children: isRecruiting ? '지원하기' : '모집 종료',
    disabled: !isRecruiting,
  };

  const handleApplyClick = () => {
    // [GA] 지원하기 버튼 클릭 이벤트 전송
    ReactGA.event('click_apply_button', {
      event_category: 'ClubDetail',
      club_name: clubName || 'unknown',
      status: recruitStatus,
    });
  };

  return <Button {...applyButtonProps} to={to} width={width} onClick={handleApplyClick} />;
};

export default ApplyButton;
