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
  position: 'relative',
  zIndex: 2,
  '@media(max-width: 768px)': {
    gap: '12px',
    marginBottom: '16px',
  },
  '@media(max-width: 480px)': {
    gap: '8px',
    marginBottom: '12px',
  },
});

export const HeaderText = ({ children }: { children: React.ReactNode }) => (
  <Text size='xl' weight='bold' color={theme.colors.bg}>
    {children}
  </Text>
);

export const SubText = ({ children }: { children: React.ReactNode }) => (
  <Text size='sm' weight='regular' color='rgba(255, 255, 255, 0.9)'>
    {children}
  </Text>
);
