import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text/index';
import { theme } from '@/styles/theme';

export const BannerTextWrapper = styled.div({
  textAlign: 'center',
  marginBottom: '24px',
  gap: '8px',
});

export const HeaderText = (children: { children: React.ReactNode }) => (
  <Text size='xl' weight='bold' color={theme.colors.textPrimary} {...children} />
);

export const SubText = (children: { children: React.ReactNode }) => (
  <Text size='sm' weight='regular' color={theme.colors.textSecondary} {...children} />
);
