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

export const ThPhone = styled(Th)({
  ['@media (max-width: 940px)']: {
    display: 'none',
  },
});

export const ThJoinDate = styled(Th)({
  ['@media (max-width: 965px)']: {
    display: 'none',
  },
});

export const ThRole = styled(Th)({
  ['@media (max-width: 797px)']: {
    display: 'none',
  },
});

export const EmptyMessage = styled.div(({ theme }) => ({
  textAlign: 'center',
  padding: '3rem',
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
}));
