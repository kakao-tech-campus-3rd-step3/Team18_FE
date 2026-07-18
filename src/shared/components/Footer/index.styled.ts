import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ENVELOPE_WIDTH = 96;
const ENVELOPE_HEIGHT = 60;
const FLAP_HEIGHT = 31;

const hintBob = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-6px)' },
});

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.gray100,
  padding: 32,
  borderTop: `1px solid ${theme.colors.primary00}`,
  boxSizing: 'border-box',
}));

export const Copyright = styled.div(({ theme }) => ({
  marginTop: 8,
  textAlign: 'center',
  fontSize: theme.font.size.sm,
  color: theme.colors.gray400,
}));

export const Email = styled.a(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  fontSize: theme.font.size.xs,
  color: theme.colors.gray500,
  marginBottom: 8,
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    textDecoration: 'underline',
    color: theme.colors.gray700,
  },
}));

export const Sponsor = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 24,
  perspective: 1000,
});

// 봉투 전체(클릭하면 모달이 뜨는 트리거). hover 시 뚜껑이 살짝 열려 클릭을 유도한다.
export const Envelope = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'relative',
  width: ENVELOPE_WIDTH,
  height: ENVELOPE_HEIGHT,
  cursor: 'pointer',
  transformStyle: 'preserve-3d',
  animation: isOpen ? 'none' : `${hintBob} 2.4s ease-in-out infinite`,
}));

// 봉투 뒷면(가장 안쪽). 앞면/뚜껑이 clip-path·삼각형이라 코너가 직각이므로 radius 없이 맞춘다.
export const EnvelopeBack = styled.div(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundColor: theme.colors.primary900,
}));

// 봉투 앞면
export const EnvelopeFront = styled.div(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 4,
  backgroundColor: theme.colors.primary700,
  // 아래쪽 접힘선(V) 표현
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 42%, 0 100%)',
}));

// 봉투 옆/아래 접힘선 음영
export const EnvelopeFrontShade = styled.div(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 4,
  backgroundColor: theme.colors.primary600,
  clipPath: 'polygon(0 100%, 50% 42%, 100% 100%)',
}));

// 윗뚜껑. 닫힘: 아래를 덮음 / 열림: 뒤로 젖혀짐.
export const Flap = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  borderLeft: `${ENVELOPE_WIDTH / 2}px solid transparent`,
  borderRight: `${ENVELOPE_WIDTH / 2}px solid transparent`,
  borderTop: `${FLAP_HEIGHT}px solid ${theme.colors.primary800}`,
  transformOrigin: 'top center',
  transformStyle: 'preserve-3d',
  transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
  zIndex: isOpen ? 1 : 5,
  transition: 'transform 0.45s ease, z-index 0s linear 0.22s',
}));

// 봉투에서 빠져나온 듯한 모달 안내 아이콘
export const SponsorHeartIcon = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 12px',
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.colors.bgGreen,
  color: theme.colors.primary,
  fontSize: 24,
}));

export const SponsorTitle = styled.p(({ theme }) => ({
  margin: 0,
  textAlign: 'center',
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.bold,
  lineHeight: 1.5,
  color: theme.colors.gray900,
}));

export const SponsorSubText = styled.p(({ theme }) => ({
  margin: '8px 0 0',
  textAlign: 'center',
  fontSize: theme.font.size.sm,
  lineHeight: 1.5,
  color: theme.colors.gray500,
}));

export const AccountRow = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  marginTop: 20,
  padding: '12px 12px 12px 16px',
  borderRadius: theme.radius.md,
  backgroundColor: theme.colors.bgGreen,
  border: `1px solid ${theme.colors.border}`,
}));

export const AccountInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  textAlign: 'left',
});

export const AccountBank = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.gray500,
}));

export const AccountNumber = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.bold,
  color: theme.colors.gray900,
}));

export const CopyButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: '8px 14px',
  border: 'none',
  borderRadius: theme.radius.sm,
  backgroundColor: theme.colors.primary,
  color: theme.colors.bg,
  fontSize: theme.font.size.sm,
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: theme.colors.primary700,
  },
}));
