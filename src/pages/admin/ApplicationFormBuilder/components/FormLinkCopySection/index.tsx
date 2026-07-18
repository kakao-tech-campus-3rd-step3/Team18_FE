import { FiCopy, FiLink } from 'react-icons/fi';
import { toast } from '@/shared/utils/toast';
import * as S from './index.styled';

type Props = {
  clubId: number;
};

export const ApplicationFormLinkCopySection = ({ clubId }: Props) => {
  const formLink = `${window.location.origin}/clubs/${clubId}/apply`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(formLink);
      toast.success('지원폼 링크가 복사되었습니다.');
    } catch {
      toast.error('지원폼 링크 복사에 실패했습니다.');
    }
  };

  return (
    <S.Container>
      <S.LinkInfo>
        <S.LinkLabel>
          <FiLink aria-hidden />
          지원폼 공유 링크
        </S.LinkLabel>
        <S.LinkText>{formLink}</S.LinkText>
      </S.LinkInfo>
      <S.CopyButton type='button' onClick={handleCopyLink} aria-label='지원폼 링크 복사'>
        <FiCopy />
        복사
      </S.CopyButton>
      <S.Tooltip role='tooltip'>
        복사하지 않아도 동아리움에서는 지원 시기에 맞게 지원하기 버튼이 활성화 돼요!
      </S.Tooltip>
    </S.Container>
  );
};
