import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { toast } from '@/shared/utils/toast';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

type Props = {
  recruitStatus: RecruitStatus;
  to: string;
  width?: string;
  isRegistered: boolean;
  everyTimeUrl: string;
  googleFormUrl: string;
};

const ApplyButton = ({
  recruitStatus,
  to,
  width,
  isRegistered,
  everyTimeUrl,
  googleFormUrl,
}: Props) => {
  const navigate = useNavigate();
  const isRecruiting = recruitStatus === '모집중';

  const applyButtonProps = {
    children: isRecruiting ? '지원하기' : recruitStatus,
    disabled: !isRecruiting,
  };

  const isValidUrl = (url: string) => /^https?:\/\//.test(url);

  const handleApplyClick = () => {
    if (isRegistered) {
      navigate(to);
      return;
    }

    if (googleFormUrl && isValidUrl(googleFormUrl)) {
      window.open(googleFormUrl, '_blank');
      return;
    }

    if (everyTimeUrl && isValidUrl(everyTimeUrl)) {
      window.open(everyTimeUrl, '_blank');
      return;
    }

    toast.error('지원하기 링크를 확인할 수 없는 동아리입니다.');
  };

  return <Button {...applyButtonProps} width={width} onClick={handleApplyClick} />;
};

export default ApplyButton;
