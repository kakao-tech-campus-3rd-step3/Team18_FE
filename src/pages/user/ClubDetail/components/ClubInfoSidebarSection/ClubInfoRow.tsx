import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';

type Props = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export const ClubInfoRow = ({ icon, label, value }: Props) => {
  return (
    <Row>
      <Icon>{icon}</Icon>
      <LabelCell>
        <Text size='sm' color='#757575'>
          {label}
        </Text>
      </LabelCell>
      <ValueCell>{value}</ValueCell>
    </Row>
  );
};

const Row = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const LabelCell = styled.span({
  width: '5rem',
  flexShrink: 0,
  whiteSpace: 'nowrap',
});

const ValueCell = styled.span({
  flex: 1,
  lineHeight: '1.2rem',
});

const Icon = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.textSecondary,
  flexShrink: 0,
  fontSize: '1.2rem',
}));
