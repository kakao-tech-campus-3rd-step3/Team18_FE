import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '@/shared/components/Modal';

type OnboardingPopupProps = {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  onConfirm: () => void;
};

export const OnboardingPopup = ({
  isOpen,
  imageSrc,
  imageAlt,
  title,
  onConfirm,
}: OnboardingPopupProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Modal isOpen={open} onClose={handleConfirm} title={title} size='lg'>
      <Image src={imageSrc} alt={imageAlt} />
      <ConfirmButton type='button' onClick={handleConfirm}>
        확인
      </ConfirmButton>
    </Modal>
  );
};

const Image = styled.img({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '0.5rem',
  marginBottom: '1.5rem',
});

const ConfirmButton = styled.button(({ theme }) => ({
  width: '100%',
  padding: '0.75rem',
  backgroundColor: theme.colors.primary,
  color: '#fff',
  border: 'none',
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.base,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: 0.9,
  },
}));
