import styled from '@emotion/styled';
import { useState } from 'react';
import { Modal } from '@/shared/components/Modal';

type OnboardingPopupProps = {
  isOpen: boolean;
  images: string[];
  imageAlt: string;
  onConfirm: () => void;
};

export const OnboardingPopup = ({
  isOpen,
  images = [],
  imageAlt,
  onConfirm,
}: OnboardingPopupProps) => {
  const [page, setPage] = useState(0);

  if (images.length === 0) return null;

  const isLast = page === images.length - 1;
  const isFirst = page === 0;

  const handleNext = () => {
    if (isLast) {
      onConfirm();
    } else {
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setPage((p) => p - 1);
    }
  };

  const handleClose = () => {
    onConfirm();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='xxl' contentPadding='1.5rem 0 1.5rem 0'>
      <Image src={images[page]} alt={`${imageAlt} ${page + 1}`} />
      <Footer>
        {!isFirst && (
          <PrevButton type='button' onClick={handlePrev}>
            이전
          </PrevButton>
        )}
        <NextButton type='button' onClick={handleNext}>
          {isLast ? '확인' : '다음'}
        </NextButton>
      </Footer>
    </Modal>
  );
};

const Image = styled.img({
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '0.5rem',
});

const Footer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  padding: '0 1.5rem',
});

const PrevButton = styled.button(({ theme }) => ({
  padding: '0.625rem 1.5rem',
  backgroundColor: theme.colors.gray100,
  color: theme.colors.gray700,
  border: 'none',
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.base,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  '&:hover': { opacity: 0.9 },
}));

const NextButton = styled.button(({ theme }) => ({
  padding: '0.625rem 1.5rem',
  backgroundColor: theme.colors.primary,
  color: '#fff',
  border: 'none',
  borderRadius: theme.radius.md,
  fontSize: theme.font.size.base,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  '&:hover': { opacity: 0.9 },
}));
