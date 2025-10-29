import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '80%',
  maxWidth: '780px',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.sm,
  padding: '24px 40px',
  border: `1px solid ${theme.colors.border}`,
  marginTop: '48px',
}));

export const NoticeRow = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 0',
  borderBottom: `1px solid ${theme.colors.border}`,
  cursor: 'pointer',
  transition: 'color 0.2s ease, transform 0.15s ease',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    fontWeight: theme.font.weight.bold,
    transform: 'translateY(-1px)',
  },
}));

export const NoticeText = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
  flex: 1,
}));

export const NoticeRight = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minWidth: '160px',
  justifyContent: 'flex-end',
});

export const NoticeDate = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
  width: '80px',
  textAlign: 'right',
}));

export const NoticeAuthor = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
  width: '60px',
  textAlign: 'right',
}));

export const PaginationWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '8px',
});

export const PageButton = styled.button<{ $active?: boolean }>(({ theme, $active }) => ({
  padding: '6px 12px',
  border: 'none',
  borderRadius: theme.radius.sm,
  backgroundColor: $active ? theme.colors.primary : theme.colors.bg,
  color: $active ? theme.colors.bg : theme.colors.textPrimary,
  cursor: 'pointer',
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  transition: 'background-color 0.2s ease, color 0.2s ease',
  '&:hover': {
    backgroundColor: $active ? theme.colors.primary700 : theme.colors.bgGreen,
  },
}));
