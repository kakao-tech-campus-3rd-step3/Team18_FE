import { useState } from 'react';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';
import * as S from './DeleteConfirmModal.styled';

type DeleteConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  memberName: string;
};

const SKIP_DELETE_CONFIRM_KEY = 'skipDeleteConfirmation';

export const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  memberName,
}: DeleteConfirmModalProps) => {
  const [skipConfirm, setSkipConfirm] = useState(false);

  const handleConfirm = () => {
    if (skipConfirm) {
      sessionStorage.setItem(SKIP_DELETE_CONFIRM_KEY, 'true');
    }
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='회원 삭제' size='lg'>
      <S.DeleteContent>
        <S.Message>{memberName} 님을(를) 삭제하시겠습니까?</S.Message>
        <S.Warning>이 작업은 되돌릴 수 없습니다.</S.Warning>

        <S.CheckboxWrapper>
          <S.Checkbox
            type='checkbox'
            id='skip-confirm'
            checked={skipConfirm}
            onChange={(e) => setSkipConfirm(e.target.checked)}
          />
          <S.CheckboxLabel htmlFor='skip-confirm'>이번 접속동안 묻지 않기</S.CheckboxLabel>
        </S.CheckboxWrapper>

        <S.ButtonWrapper>
          <Button onClick={handleConfirm}>삭제하기</Button>
        </S.ButtonWrapper>
      </S.DeleteContent>
    </Modal>
  );
};
