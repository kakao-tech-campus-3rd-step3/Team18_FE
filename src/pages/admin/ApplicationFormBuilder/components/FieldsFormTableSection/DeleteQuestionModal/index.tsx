import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const DeleteQuestionModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='질문 삭제' size='md'>
      <Content>
        <Message>작성 중인 질문을 삭제하시겠습니까?</Message>
        <Warning>삭제된 질문의 내용은 복구할 수 없습니다.</Warning>

        <ButtonWrapper>
          <Button onClick={onConfirm}>삭제하기</Button>
        </ButtonWrapper>
      </Content>
    </Modal>
  );
};

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1rem 0',
});

const Message = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray900,
  textAlign: 'center',
  margin: 0,
}));

const Warning = styled.p(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray600,
  textAlign: 'center',
  margin: 0,
}));

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
