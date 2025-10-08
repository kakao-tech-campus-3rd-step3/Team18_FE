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

export const InfoItem = styled.div<{ column?: boolean }>(({ column }) => ({
  display: 'flex',
  alignItems: column ? 'flex-start' : 'center',
  flexDirection: column ? 'column' : 'row',
  paddingTop: column ? '2rem' : '0',
  gap: '0.5rem',
}));

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const Label = styled.span<{ required?: boolean }>(({ theme, required }) => ({
  fontWeight: 500,
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

export const EditIcon = styled(FaPen)(({ theme }) => ({
  marginLeft: '0.5rem',
  cursor: 'pointer',
  color: theme.colors.gray400,
  fontSize: '0.85rem',
}));
