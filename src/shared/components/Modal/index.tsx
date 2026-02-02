import {
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import * as S from './index.styled';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'modal' | 'popover';
  anchorRef?: RefObject<HTMLElement | null>;
};

/**
 * 접근성을 고려한 모달 컴포넌트
 * - ESC 키로 닫기
 * - 포커스 트래핑
 * - 배경 클릭으로 닫기
 * - 스크린리더 지원 (aria-modal, aria-labelledby 등)
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  size,
  children,
  description,
  variant = 'modal',
  anchorRef,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const modalWidthRef = useRef<number>(0);
  const titleId = useId();
  const descriptionId = useId();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  // popover 위치 계산 함수
  const updatePosition = useCallback(
    (useStoredWidth = false) => {
      if (variant === 'popover' && anchorRef?.current && modalRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect();

        // 스크롤 시에는 저장된 width 사용, 초기에는 새로 계산
        const modalWidth =
          useStoredWidth && modalWidthRef.current > 0
            ? modalWidthRef.current
            : modalRef.current.getBoundingClientRect().width;

        // 초기 width 저장
        if (!useStoredWidth) {
          modalWidthRef.current = modalWidth;
        }

        setPosition({
          top: anchorRect.top,
          left: anchorRect.left - modalWidth,
        });
      }
    },
    [variant, anchorRef],
  );

  // popover 위치 계산 - useLayoutEffect로 깜빡임 방지
  useLayoutEffect(() => {
    if (isOpen && variant === 'popover') {
      updatePosition(false);
    } else if (!isOpen) {
      setPosition(null);
      modalWidthRef.current = 0;
    }
  }, [isOpen, variant, updatePosition]);

  // 스크롤 시 popover 위치 업데이트
  useEffect(() => {
    if (isOpen && variant === 'popover') {
      const handleScroll = () => updatePosition(true);
      window.addEventListener('scroll', handleScroll, true);
      return () => window.removeEventListener('scroll', handleScroll, true);
    }
  }, [isOpen, variant, updatePosition]);

  // 포커스 가능한 요소들 찾기
  const getFocusableElements = useCallback((container: HTMLElement): HTMLElement[] => {
    const selectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(container.querySelectorAll(selectors));
  }, []);

  // 포커스 트래핑
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!modalRef.current) return;

      // ESC 키로 닫기
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      // Tab 키 포커스 트래핑
      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements(modalRef.current);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [getFocusableElements, onClose],
  );

  // 모달 열림 시 포커스 관리 & 이벤트 리스너
  useEffect(() => {
    if (isOpen) {
      // 현재 포커스 저장
      previousFocusRef.current = document.activeElement as HTMLElement;

      // 제목으로 포커스 이동
      setTimeout(() => {
        titleRef.current?.focus();
      }, 100);

      // 키보드 이벤트 리스너
      document.addEventListener('keydown', handleKeyDown);

      // 배경 스크롤 방지 (modal variant만)
      const originalOverflow = document.body.style.overflow;
      if (variant === 'modal') {
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        if (variant === 'modal') {
          document.body.style.overflow = originalOverflow;
        }
      };
    }
  }, [isOpen, handleKeyDown]);

  // 모달 닫힘 시 포커스 복원
  useEffect(() => {
    if (!isOpen && previousFocusRef.current) {
      setTimeout(() => {
        previousFocusRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // 오버레이 클릭 시 닫기
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <S.Overlay onClick={handleOverlayClick} role='presentation' $variant={variant}>
      <S.Content
        ref={modalRef}
        $size={size}
        $variant={variant}
        $position={position ?? undefined}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <S.Header>
          <S.Title id={titleId} ref={titleRef} tabIndex={-1}>
            {title}
          </S.Title>
          {description && <S.Description id={descriptionId}>{description}</S.Description>}
        </S.Header>

        <S.Body>{children}</S.Body>
      </S.Content>
    </S.Overlay>,
    document.body,
  );
};
