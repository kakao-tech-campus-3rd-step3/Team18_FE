import styled from '@emotion/styled';
import type { DashboardCard } from '@/types/dashboard';

type Props = Omit<DashboardCard, 'id'>;

export const SummaryCard = ({ label, value, image }: Props) => {
  return (
    <Wrapper>
      <IconWrapper>{image}</IconWrapper>
      <TextWrapper>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: 'auto',
  height: '7.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '3.6rem',
  padding: '0 3.4rem',
  background: theme.colors.bg,
  borderRadius: theme.radius.lg,
}));

const IconWrapper = styled.div(({ theme }) => ({
  color: theme.colors.gray900,
}));

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.85rem',
});

const Label = styled.p(({ theme }) => ({
  fontSize: '1.35rem',
  color: theme.colors.gray900,
}));

const Value = styled.p(({ theme }) => ({
  fontSize: '2.2rem',
  fontWeight: theme.font.weight.bold,
  color: theme.colors.gray900,
}));
