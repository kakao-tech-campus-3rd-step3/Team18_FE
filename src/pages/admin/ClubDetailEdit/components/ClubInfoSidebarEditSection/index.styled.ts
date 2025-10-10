import styled from '@emotion/styled';

export const SidebarContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1rem',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.md,
}));

export const InfoItem = styled.div<{ column?: boolean }>(({ column }) => ({
  display: 'flex',
  alignItems: column ? 'flex-start' : 'center',
  flexDirection: column ? 'column' : 'row',
  paddingTop: column ? '2rem' : '0',
  gap: '0.5rem',
}));

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const Label = styled.span<{ required?: boolean }>(({ theme, required }) => ({
  fontWeight: theme.font.weight.bold,
  ...(required && {
    '&::after': {
      content: '" *"',
      color: theme.colors.error,
    },
  }),
  width: '120px',
  flexShrink: 0,
  textAlign: 'left',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

export const DisplayWrapper = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  gap: '0.3rem',
}));

export const DisplayText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.textPrimary,
  fontWeight: theme.font.weight.medium,
}));

export const SubText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  marginTop: '0.1rem',
}));
