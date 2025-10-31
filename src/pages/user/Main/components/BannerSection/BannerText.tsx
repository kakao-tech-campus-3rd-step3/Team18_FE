import styled from '@emotion/styled';
import { theme } from '@/app/styles/theme';
import { Text } from '@/shared/components/Text/index';

export const BannerTextWrapper = styled.div({
  textAlign: 'center',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
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
