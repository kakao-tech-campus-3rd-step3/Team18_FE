import { Button } from '@/shared/components/Button';
import { GuideIconButton } from '@/shared/components/GuideIconButton';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

type Props = {
  isEditMode: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  isInterviewMode: boolean;
  onInterviewChange: (checked: boolean) => void;
  onOpenGuide?: () => void;
};

export const ApplicationFormBuilderHeaderSection = ({
  isEditMode,
  onEdit,
  onSave,
  onCancel,
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
        {isEditMode ? (
          <S.ButtonWrapper>
            <Button variant='outline' width='4rem' onClick={onCancel}>
              취소
            </Button>
            <Button width='6rem' onClick={onSave}>
              저장하기
            </Button>
          </S.ButtonWrapper>
        ) : (
          <Button variant='outline' width='6rem' onClick={onEdit}>
            수정하기
          </Button>
        )}
      </S.HeaderWrapper>
      <S.CheckboxWrapper>
        {isEditMode ? (
          <>
            <S.CustomCheckbox
              type='checkbox'
              checked={isInterviewMode}
              onChange={(e) => onInterviewChange(e.target.checked)}
            />
            <Text size='sm' weight='bold' color='#339356'>
              면접 전형을 진행하시면 체크박스를 눌러주세요!
            </Text>
          </>
        ) : (
          <Text size='sm' weight='bold' color='#339356'>
            면접날짜는 타임 슬롯을 이용해서 안내할 수 있어요!
          </Text>
        )}
      </S.CheckboxWrapper>
    </S.Container>
  );
};
