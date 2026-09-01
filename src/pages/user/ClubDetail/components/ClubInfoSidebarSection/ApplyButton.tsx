import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

type Props = {
  clubId: number;
  clubName: string;
  recruitStatus: RecruitStatus;
  to: string;
  width?: string;
  isRegistered: boolean;
  everyTimeUrl: string | null;
  googleFormUrl: string | null;
};

const isValidUrl = (url: string | null): url is string => !!url && /^https?:\/\//.test(url);

const ApplyButton = ({
  clubId,
  clubName,
  recruitStatus,
  to,
  width,
  isRegistered,
  everyTimeUrl,
  googleFormUrl,
}: Props) => {
  const navigate = useNavigate();
  const isRecruiting = recruitStatus === '모집중';
  // 지원폼도 없고 유효한 외부 링크도 없으면 지원 자체가 불가능
  const hasApplyTarget = isRegistered || isValidUrl(googleFormUrl) || isValidUrl(everyTimeUrl);

  const applyButtonProps = {
    children: isRecruiting ? '지원하기' : recruitStatus,
    disabled: !isRecruiting || !hasApplyTarget,
  };

  const handleApplyClick = () => {
    if (!isRecruiting || !hasApplyTarget) return;

    window.dataLayer?.push({ event: 'club_apply_click', clubId, clubName });

    if (isRegistered) {
      navigate(to);
      return;
    }

    if (isValidUrl(googleFormUrl)) {
      window.open(googleFormUrl, '_blank');
      return;
    }

    if (isValidUrl(everyTimeUrl)) {
      window.open(everyTimeUrl, '_blank');
    }
  };

  return <Button {...applyButtonProps} width={width} onClick={handleApplyClick} />;
};

export default ApplyButton;
