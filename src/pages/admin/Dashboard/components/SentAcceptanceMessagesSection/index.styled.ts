import styled from '@emotion/styled';

export const Container = styled.section({
  marginTop: '3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const ChannelField = styled.fieldset({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  border: 'none',
  padding: 0,
  margin: 0,
  minWidth: 0,
});

export const ChannelLegend = styled.legend(({ theme }) => ({
  padding: 0,
  marginBottom: '0.75rem',
  fontSize: theme.font.size.base,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
}));

export const ChannelOptions = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
});

export const ChannelLabel = styled.label<{ disabled?: boolean }>(({ theme, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: theme.font.size.base,
  color: disabled ? theme.colors.gray400 : theme.colors.textPrimary,
  cursor: disabled ? 'not-allowed' : 'pointer',
  lineHeight: 1.5,
}));

export const ChannelCheckbox = styled.input(({ theme }) => ({
  appearance: 'none',
  width: '16px',
  height: '16px',
  margin: 0,
  border: `2px solid ${theme.colors.gray400}`,
  borderRadius: theme.radius.sm,
  cursor: 'pointer',
  flexShrink: 0,

  '&:checked': {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.colors.primary200}`,
    outlineOffset: '2px',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    borderColor: theme.colors.gray200,
  },
}));

export const HelperText = styled.p<{ tone?: 'error' | 'info' }>(({ theme, tone = 'info' }) => ({
  margin: 0,
  fontSize: theme.font.size.sm,
  lineHeight: 1.5,
  color: tone === 'error' ? theme.colors.error : theme.colors.textSecondary,
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  '@media (max-width: 430px)': {
    '& > *': {
      width: '100%',
    },
  },
});
