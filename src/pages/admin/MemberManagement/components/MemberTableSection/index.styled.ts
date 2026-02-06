import styled from '@emotion/styled';

export const TableWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.md,
  overflow: 'hidden',
  paddingLeft: '5px',
  minWidth: '462px',
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
  fontSize: theme.font.size.base,
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
  padding: '1.2rem',
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,

  ['@media (max-width: 833px)']: {
    fontSize: theme.font.size.sm,
  },
}));

export const TdName = styled(Td)(({ theme }) => ({
  fontWeight: theme.font.weight.bold,
  color: theme.colors.textPrimary,
}));

export const RoleButtonGroup = styled.div({
  display: 'flex',
  gap: '1.0rem',
  flexWrap: 'wrap',

  ['@media (max-width: 854px)']: {
    gap: '0.5rem',
  },
});

export const RoleButton = styled.button<{ active: boolean }>(({ theme, active }) => ({
  fontSize: theme.font.size.base,
  padding: '0.5rem 1.4rem',
  borderRadius: theme.radius.md,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s',
  whiteSpace: 'nowrap',
  ['@media (max-width: 910px)']: {
    fontSize: theme.font.size.sm,
    padding: '0.25rem 0.75rem',
    borderRadius: theme.radius.sm,
  },

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

//797px 이하에서는 역할버튼 숨김
export const ThRole = styled(Th)({
  ['@media (max-width: 797px)']: {
    display: 'none',
  },
});

export const TdRole = styled(Td)({
  ['@media (max-width: 797px)']: {
    display: 'none',
  },
});
