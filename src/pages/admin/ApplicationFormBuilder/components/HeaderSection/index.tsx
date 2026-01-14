import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

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
    <Container>
      <HeaderWrapper>
        <Title>지원폼 생성</Title>
        {isEditMode ? (
          <ButtonWrapper>
            <Button variant='outline' width='4rem' onClick={onCancel}>
              취소
            </Button>
            <Button width='6rem' onClick={onSave}>
              저장하기
            </Button>
          </ButtonWrapper>
        ) : (
          <Button variant='outline' width='6rem' onClick={onEdit}>
            수정하기
          </Button>
        )}
      </HeaderWrapper>
      <CheckboxWrapper>
        <CustomCheckbox type='checkbox' />
        <Text size='sm' weight='bold' color='#339356'>
          면접 전형을 진행하시면 체크박스를 눌러주세요!
        </Text>
      </CheckboxWrapper>
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '2.5rem 0 1rem 0',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1.5rem 0 0.5rem 0',
    gap: '0.8rem',
  },
}));

const HeaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ButtonWrapper = styled.div({
  display: 'flex',
  gap: '0.5rem',
});

const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.medium,

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '1.5rem',
  },
}));

const CheckboxWrapper = styled.div({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const CustomCheckbox = styled.input(({ theme }) => ({
  width: '1.15rem',
  height: '1.15rem',
  cursor: 'pointer',
  appearance: 'none',
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '4px',
  position: 'relative',
  transition: 'all 0.2s ease',

  '&:checked': {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  '&:checked::after': {
    content: '"✓"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  '&:hover': {
    borderColor: theme.colors.primary800,
    boxShadow: `0 0 0 3px ${theme.colors.primary}20`,
  },

  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${theme.colors.primary}40`,
  },
}));
