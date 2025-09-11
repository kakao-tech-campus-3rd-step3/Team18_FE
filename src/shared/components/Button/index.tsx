import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'primaryLight' | 'primaryOutline';

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
  variant = 'primary',
  width,
}: Props) => {
  if (to) {
    return (
      <ButtonLink to={to} $disabled={disabled} $variant={variant} $width={width}>
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
  $variant: Variant;
  $width?: string;
};

const getVariantStyles = (theme: any, variant: Variant, disabled?: boolean) => {
  switch (variant) {
    case 'primaryLight':
      return {
        backgroundColor: disabled ? theme?.colors?.gray200 : theme?.colors?.primary100,
        color: theme?.colors?.primary700,
        '&:hover': {
          backgroundColor: disabled ? theme?.colors?.gray200 : theme?.colors?.primary200,
        },
      };
    case 'primaryOutline':
      return {
        backgroundColor: '#fff',
        color: theme?.colors?.primary,
        border: `1px solid ${theme?.colors?.primary}`,
        '&:hover': {
          backgroundColor: disabled ? '#fff' : theme?.colors?.primary100,
        },
      };
    case 'primary':
    default:
      return {
        backgroundColor: disabled ? theme?.colors?.gray400 : theme?.colors?.primary,
        color: '#fff',
        '&:hover': {
          backgroundColor: disabled ? theme?.colors?.gray400 : theme?.colors?.primary700,
        },
      };
  }
};

const baseStyles = ({ theme, $disabled, $variant, $width }: StyledProps & { theme?: any }) => ({
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
