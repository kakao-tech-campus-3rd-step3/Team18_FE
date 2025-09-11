import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ children, onClick, to, disabled, type = 'button' }: Props) => {
  if (to) {
    return (
      <ButtonLink to={to} $disabled={disabled}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <StyledButton onClick={onClick} $disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

type StyledProps = {
  $disabled?: boolean;
};

const baseStyles = ({ theme, $disabled }: StyledProps & { theme?: any }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  color: '#fff',
  backgroundColor: $disabled ? theme?.colors?.gray400 : theme?.colors?.primary,
  border: 'none',
  borderRadius: theme?.radius?.md,
  width: '20rem',
  padding: '0.75rem 0',
  cursor: $disabled ? 'not-allowed' : 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' as const,
  transition: 'background-color 0.2s, transform 0.1s',

  '&:hover': {
    backgroundColor: $disabled ? theme?.colors?.gray400 : theme?.colors?.primary700,
    transform: $disabled ? 'none' : 'translateY(-0.0625rem)',
  },

  '&:active': {
    transform: $disabled ? 'none' : 'translateY(0)',
  },
});

const StyledButton = styled.button<StyledProps>(baseStyles);

const ButtonLink = styled(Link, {
  shouldForwardProp: (prop) => !['$disabled'].includes(prop),
})<StyledProps>(baseStyles);
