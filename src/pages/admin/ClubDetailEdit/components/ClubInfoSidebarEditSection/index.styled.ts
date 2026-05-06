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

export const FieldGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

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

export const DisplayWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  gap: '0.3rem',
});

export const DisplayText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.textPrimary,
  fontWeight: theme.font.weight.medium,
}));

export const SubText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  lineHeight: 0.1,
}));

export const ToggleGroup = styled.div({
  display: 'flex',
  gap: '0.4rem',
  width: '100%',
  justifyContent: 'flex-end',
});

export const ToggleButton = styled.button<{ active: boolean }>(({ theme, active }) => ({
  padding: '0.3rem 1rem',
  borderRadius: '4rem',
  fontSize: theme.font.size.sm,
  fontWeight: active ? theme.font.weight.bold : theme.font.weight.regular,
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  border: `1px solid ${active ? theme.colors.primary : theme.colors.gray300}`,
  backgroundColor: active ? theme.colors.primary100 : theme.colors.bg,
  color: active ? theme.colors.primary : theme.colors.gray600,
}));

export const ToggleHelp = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
  textAlign: 'right',
}));
