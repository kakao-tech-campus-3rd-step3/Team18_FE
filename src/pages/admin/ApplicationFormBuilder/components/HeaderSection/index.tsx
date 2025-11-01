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
      <Text size='sm' color='#339356'>
        면접날짜는 타임 슬롯을 이용해서 안내할 수 있어요!
      </Text>
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '2.5rem 0 1rem 0',
  boxSizing: 'border-box',
});

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
}));
