import styled from '@emotion/styled';

export const ScrollableBody = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  overflowY: 'auto',
  maxHeight: '60vh',
  paddingRight: '0.5rem',
  marginBottom: '1rem',

  // 스크롤바 스타일링
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#a8a8a8',
  },
});

export const Field = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: 1,
});

export const FieldRow = styled.div({
  display: 'flex',
  gap: '1rem',
  width: '100%',
});

export const Label = styled.label(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray800,
}));

export const ReadOnlyText = styled.p(({ theme }) => ({
  padding: '0.75rem',
  fontSize: theme.font.size.base,
  color: theme.colors.gray700,
  backgroundColor: theme.colors.gray00,
  borderRadius: theme.radius.sm,
  margin: 0,
}));

export const ErrorMessage = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.error,
  marginTop: '-0.25rem',
}));

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '0.5rem',
  borderTop: '1px solid #f0f0f0',
});
