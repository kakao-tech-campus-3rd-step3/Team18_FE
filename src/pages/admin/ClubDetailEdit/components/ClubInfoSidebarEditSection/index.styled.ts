import styled from '@emotion/styled';
import { FaPen } from 'react-icons/fa';

export const SidebarContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem', 
  padding: '1rem',
  backgroundColor: theme.colors.bg,
  borderRadius: theme.radius.md,
}));

export const InfoItem = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem', 
}));

export const Label = styled.span(({ theme }) => ({
  width: '120px', 
  flexShrink: 0,
  textAlign: 'left',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

export const EditIcon = styled(FaPen)(({ theme }) => ({
  marginLeft: '0.5rem',
  cursor: 'pointer',
  color: theme.colors.gray400,
  fontSize: '0.85rem',
}));
