import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { theme } from '@/styles/theme';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  color?: fontColorKeys;
  backgroundColor?: backgroundColorKeys;
  weight?: WeightKeys;
  size?: string;
  padding?: string;
  width?: string;
  opacity?: string;
  borderRadius?: borderRadiusKeys;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  onClick,
  color = 'textPrimary',
  backgroundColor = 'primary',
  weight = 'medium',
  size = 'medium',
  padding = '0.7rem',
  width = 'auto',
  opacity,
  borderRadius = 'sm',
  disabled,
  type = 'button',
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      weight={weight}
      size={size}
      padding={padding}
      width={width}
      opacity={opacity}
      borderRadius={borderRadius}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>(({ theme, ...props }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: props.padding,
  width: props.width,
  color: theme.colors[props.color || 'textPrimary'],
  fontWeight: theme.font.weight[props.weight || 'medium'],
  fontSize: props.size,
  border: 'none',
  backgroundColor: theme.colors[props.backgroundColor || 'primary'],

  borderRadius: theme.radius[props.borderRadius || 'sm'],
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  opacity: props.disabled ? '0.4' : props.opacity || '1',
}));

type fontColorKeys = keyof typeof theme.colors;
type backgroundColorKeys = keyof typeof theme.colors;
type WeightKeys = keyof typeof theme.font.weight;
type borderRadiusKeys = keyof typeof theme.radius;
