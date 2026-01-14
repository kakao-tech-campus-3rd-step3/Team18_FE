import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

type Props = {
  recruitStatus: RecruitStatus;
  to: string;
  width?: string;
  children?: React.ReactNode;
};

const ApplyButton = ({ recruitStatus, to, width }: Props) => {
  const navigate = useNavigate();
  const isRecruiting = recruitStatus === '모집중';

  const applyButtonProps = {
    children: isRecruiting ? '지원하기' : '모집 종료',
    disabled: !isRecruiting,
  };

  const handleApplyClick = () => {
    navigate(to);
  };

  return <Button {...applyButtonProps} width={width} onClick={handleApplyClick} />;
};

export default ApplyButton;
