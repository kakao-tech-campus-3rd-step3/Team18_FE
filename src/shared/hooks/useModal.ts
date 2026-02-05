import { useCallback, useState } from 'react';

type UseModalReturn = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggle: () => void;
};

/**
 * 모달 상태 관리 훅
 *
 * @example
 * const { isOpen, openModal, closeModal } = useModal();
 *
 * <button onClick={openModal}>모달 열기</button>
 * <Modal isOpen={isOpen} onClose={closeModal} title="제목">
 *   모달 내용
 * </Modal>
 */
export const useModal = (initialState = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggle,
  };
};
