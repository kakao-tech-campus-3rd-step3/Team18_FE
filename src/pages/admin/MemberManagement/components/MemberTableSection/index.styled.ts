import styled from '@emotion/styled';

export const TableWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.md,
  overflow: 'hidden',
}));

export const Table = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
});

export const TableHead = styled.thead(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  borderBottom: `1px solid ${theme.colors.gray200}`,
}));

export const Th = styled.th<{ width?: string }>(({ theme, width }) => ({
  textAlign: 'left',
  padding: '1rem',
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray500,
  ...(width && { width }),
}));

export const TableRow = styled.tr(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.colors.gray00,
  },
}));

export const Td = styled.td(({ theme }) => ({
  padding: '1rem',
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
}));

export const TdName = styled(Td)(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
}));

export const RoleButtonGroup = styled.div({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
});

export const RoleButton = styled.button<{ active: boolean }>(({ theme, active }) => ({
  fontSize: theme.font.size.xs,
  padding: '0.25rem 0.75rem',
  borderRadius: theme.radius.sm,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s',
  whiteSpace: 'nowrap',

  ...(active
    ? {
        backgroundColor: theme.colors.primary100,
        color: theme.colors.primary,
        fontWeight: theme.font.weight.bold,
      }
    : {
        backgroundColor: theme.colors.gray00,
        color: theme.colors.gray300,

        '&:hover': {
          backgroundColor: theme.colors.gray200,
          color: theme.colors.textPrimary,
        },
      }),
}));

export const DeleteButton = styled.button(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: theme.font.weight.bold,
  color: theme.colors.gray400,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  lineHeight: 1,
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    color: theme.colors.error,
  },
}));

export const EmptyMessage = styled.div(({ theme }) => ({
  textAlign: 'center',
  padding: '3rem',
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
}));
