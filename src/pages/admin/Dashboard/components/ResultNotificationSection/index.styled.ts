import styled from '@emotion/styled';

export const Container = styled.section({
  marginTop: '3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const Header = styled.div({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.6rem',

  '& > h2': {
    width: 'auto',
  },
});

export const TableWrapper = styled.div(({ theme }) => ({
  width: '100%',
  overflowX: 'auto',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.gray100}`,
  backgroundColor: theme.colors.bg,
}));

export const Table = styled.table({
  width: '100%',
  minWidth: '640px',
  borderCollapse: 'collapse',
});

export const TableHead = styled.thead(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray200}`,
}));

export const Th = styled.th<{ align?: 'left' | 'right' }>(({ theme, align = 'left' }) => ({
  textAlign: align,
  padding: '0.9rem 1rem',
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.gray500,
  whiteSpace: 'nowrap',
}));

export const Tr = styled.tr(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray100}`,
  '&:last-of-type': {
    borderBottom: 'none',
  },
}));

export const Td = styled.td<{ align?: 'left' | 'right' }>(({ theme, align = 'left' }) => ({
  textAlign: align,
  padding: '0.9rem 1rem',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
  whiteSpace: 'nowrap',
}));

export const StatusBadge = styled.span<{ isProcessing: boolean }>(({ theme, isProcessing }) => ({
  display: 'inline-block',
  padding: '0.2rem 0.6rem',
  borderRadius: theme.radius.lg,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  backgroundColor: isProcessing ? theme.colors.blue100 : theme.colors.primary100,
  color: isProcessing ? theme.colors.blue700 : theme.colors.primary800,
}));

export const CountList = styled.div({
  display: 'flex',
  gap: '0.75rem',
});

export const Count = styled.span<{ tone: 'sent' | 'failed' | 'unknown' | 'pending' }>(
  ({ theme, tone }) => ({
    color: {
      sent: theme.colors.primary800,
      failed: theme.colors.error,
      unknown: theme.colors.warning,
      pending: theme.colors.textSecondary,
    }[tone],
  }),
);

export const Notice = styled.div(({ theme }) => ({
  padding: '2rem 1rem',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.gray100}`,
  backgroundColor: theme.colors.gray00,
  textAlign: 'center',
}));
