import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text/index';
import { theme } from '@/styles/theme';

export const BannerTextWrapper = styled.div({
  textAlign: 'center',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    gap: '12px',
    marginBottom: '16px',
  },

  '@media(max-width: 480px)': {
    gap: '8px',
    marginBottom: '12px',
  },
});

export const HeaderText = ({ children }: { children: React.ReactNode }) => (
  <Text size='xl' weight='bold' color={theme.colors.textPrimary}>
    {children}
  </Text>
);

export const SubText = ({ children }: { children: React.ReactNode }) => (
  <Text size='sm' weight='regular' color={theme.colors.textSecondary}>
    {children}
  </Text>
);
