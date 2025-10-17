import styled from '@emotion/styled';
import type { DashboardCard } from '@/pages/admin/Dashboard/types/dashboard';

type Props = Omit<DashboardCard, 'id'> & {
  isEmpty?: boolean;
};

export const SummaryCard = ({ label, value, image, isEmpty = false }: Props) => {
  return (
    <Wrapper>
      <IconWrapper isEmpty={isEmpty}>{image}</IconWrapper>
      <TextWrapper>
        <Label>{label}</Label>
        <Value isEmpty={isEmpty}>{value}</Value>
        {isEmpty && <EmptyText>예정된 모집이 없습니다</EmptyText>}
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

const IconWrapper = styled.div<{ isEmpty?: boolean }>(({ theme, isEmpty }) => ({
  color: isEmpty ? theme.colors.gray400 : theme.colors.gray900,
  transition: 'color 0.2s',
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

const Value = styled.p<{ isEmpty?: boolean }>(({ theme, isEmpty }) => ({
  fontSize: '2rem',
  fontWeight: theme.font.weight.bold,
  color: isEmpty ? theme.colors.gray400 : theme.colors.gray900,
  transition: 'color 0.2s',
}));

const EmptyText = styled.span(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.colors.gray500,
  marginTop: '-0.3rem',
}));
