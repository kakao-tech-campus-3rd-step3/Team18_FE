import { GuideIconButton } from '@/shared/components/GuideIconButton';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

type Props = {
  isInterviewMode: boolean;
  onInterviewChange: (checked: boolean) => void;
  onOpenGuide?: () => void;
};

export const ApplicationFormBuilderHeaderSection = ({
  isInterviewMode,
  onInterviewChange,
  onOpenGuide,
}: Props) => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.TitleWrapper>
          <S.Title>지원폼 생성</S.Title>
          {onOpenGuide && <GuideIconButton onClick={onOpenGuide} />}
        </S.TitleWrapper>
      </S.HeaderWrapper>
      <S.CheckboxWrapper>
        <S.CustomCheckbox
          type='checkbox'
          checked={isInterviewMode}
          onChange={(e) => onInterviewChange(e.target.checked)}
        />
        <Text size='sm' weight='bold' color='#339356'>
          면접 전형을 진행하시면 체크박스를 눌러주세요!
        </Text>
      </S.CheckboxWrapper>
    </S.Container>
  );
};
