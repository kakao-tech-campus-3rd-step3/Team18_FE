import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

type Props = {
  isEditMode: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
};

export const ApplicationFormBuilderHeaderSection = ({
  isEditMode,
  onEdit,
  onSave,
  onCancel,
}: Props) => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Title>지원폼 생성</S.Title>
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
        <S.CustomCheckbox type='checkbox' />
        <Text size='sm' weight='bold' color='#339356'>
          면접 전형을 진행하시면 체크박스를 눌러주세요!
        </Text>
      </S.CheckboxWrapper>
    </S.Container>
  );
};
