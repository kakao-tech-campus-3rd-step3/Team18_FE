import styled from '@emotion/styled';

export const DeleteContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1rem 0',
});

export const Message = styled.p(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray900,
  textAlign: 'center',
  margin: 0,
}));

export const Warning = styled.p(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray600,
  textAlign: 'center',
  margin: 0,
}));

export const CheckboxWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'center',
});

export const Checkbox = styled.input({
  width: '16px',
  height: '16px',
  cursor: 'pointer',
});

export const CheckboxLabel = styled.label(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray700,
  cursor: 'pointer',
  userSelect: 'none',
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
