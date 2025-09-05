import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, disabled, type = 'button' }) => {
  if (to) {
    return (
      <ButtonLink to={to} disabled={disabled}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ disabled?: boolean }>(({ theme, disabled }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: '#fff',
  backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary,
  border: 'none',
  borderRadius: theme.radius.md,
  width: 320,
  padding: '12px 0',
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'background-color 0.2s, transform 0.1s',
  display: 'inline-block',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary700,
    transform: disabled ? 'none' : 'translateY(-1px)',
  },

  '&:active': {
    transform: disabled ? 'none' : 'translateY(0)',
  },
}));

const ButtonLink = styled(Link)<{ disabled?: boolean }>(({ theme, disabled }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: '#fff',
  backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary,
  border: 'none',
  borderRadius: theme.radius.md,
  width: 320,
  padding: '12px 0',
  cursor: disabled ? 'not-allowed' : 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  textAlign: 'center',
  transition: 'background-color 0.2s, transform 0.1s',

  pointerEvents: disabled ? 'none' : 'auto',

  '&:hover': {
    backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary700,
    transform: disabled ? 'none' : 'translateY(-1px)',
  },

  '&:active': {
    transform: disabled ? 'none' : 'translateY(0)',
  },
}));
