import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
type Variant = 'light' | 'outline';
import type { Theme } from '@emotion/react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
  width?: string;
};

export const Button = ({
  children,
  onClick,
  to,
  disabled,
  type = 'button',
  variant,
  width,
}: Props) => {
  const navigate = useNavigate();

  if (to) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      navigate(to);
      window.scrollTo(0, 0);
      onClick?.();
    };

    return (
      <ButtonLink
        to={to}
        $disabled={disabled}
        $variant={variant}
        $width={width}
        onClick={handleClick}
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      $disabled={disabled}
      $variant={variant}
      $width={width}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

type StyledProps = {
  $disabled?: boolean;
  $variant?: Variant;
  $width?: string;
};

const getVariantStyles = (theme: Theme, variant?: Variant, disabled?: boolean) => {
  if (variant === 'light') {
    return {
      backgroundColor: disabled ? theme?.colors?.gray200 : theme?.colors?.primary100,
      color: theme?.colors?.primary700,
      '&:hover': {
        backgroundColor: disabled ? theme?.colors?.gray200 : theme?.colors?.primary200,
      },
    };
  }

  if (variant === 'outline') {
    return {
      backgroundColor: '#fff',
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
      '&:hover': {
        backgroundColor: disabled ? '#fff' : theme.colors.primary100,
      },
    };
  }

  return {
    backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary,
    color: '#fff',
    '&:hover': {
      backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary700,
    },
  };
};

const baseStyles = ({ theme, $disabled, $variant, $width }: StyledProps & { theme: Theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  border: 'none',
  borderRadius: theme?.radius?.md,
  width: $width || '20rem',
  padding: '0.75rem 0',
  cursor: $disabled ? 'not-allowed' : 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' as const,
  transition: 'background-color 0.2s, transform 0.1s',

  ...getVariantStyles(theme, $variant, $disabled),

  '&:active': {
    transform: $disabled ? 'none' : 'translateY(0)',
  },
});

const StyledButton = styled.button<StyledProps>(baseStyles);

const ButtonLink = styled(Link, {
  shouldForwardProp: (prop) => !['$disabled', '$variant', '$width'].includes(prop),
})<StyledProps>(baseStyles);
