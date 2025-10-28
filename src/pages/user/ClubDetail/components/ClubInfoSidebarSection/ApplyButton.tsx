import { Button } from '@/shared/components/Button';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

type Props = {
  recruitStatus: RecruitStatus;
  to: string;
  width?: string;
  children?: React.ReactNode;
};
const ApplyButton = ({ recruitStatus, to, width }: Props) => {
  const isRecruiting = recruitStatus === '모집중';
  const applyButtonProps = {
    children: isRecruiting ? '지원하기' : '모집 종료',
    disabled: !isRecruiting,
  };

  return <Button {...applyButtonProps} to={to} width={width} />;
};

export default ApplyButton;
