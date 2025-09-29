import styled from '@emotion/styled';
import { FiEdit2 } from 'react-icons/fi';

export const SidebarContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));

export const InfoItem = styled.div(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '8px',
  span: {
    flex: 1,
    textAlign: 'center',
  },
}));

export const InlineInput = styled.input(({ theme }) => ({
  border: 'none',
  borderBottom: `1px solid ${theme.colors.gray300}`,
  fontSize: theme.font.size.sm,
  padding: '2px 4px',
  flex: 1,
  textAlign: 'center',
  '&:focus': {
    outline: 'none',
    borderBottom: `1px solid ${theme.colors.primary}`,
  },
}));

export const EditIcon = styled(FiEdit2)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colors.gray500,
  '&:hover': {
    color: theme.colors.primary,
  },
}));

export const Notice = styled.div(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
