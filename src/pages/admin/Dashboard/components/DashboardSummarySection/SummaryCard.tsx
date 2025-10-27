import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import type { DashboardCard } from '@/pages/admin/Dashboard/types/dashboard';

type Props = Omit<DashboardCard, 'id'> & {
  isEmpty?: boolean;
};

export const SummaryCard = ({ label, value, isEmpty = false }: Props) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text color='#7C7D8C' weight='medium' size='lg'>
          {label}
        </Text>
        <Value isEmpty={isEmpty}>{value}</Value>
        {isEmpty && <EmptyText>예정된 모집이 없습니다</EmptyText>}
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  width: '15rem',
  display: 'flex',
  alignItems: 'center',
  padding: '1.2rem 2rem',
  background: '#FDFDFF',
  borderRadius: theme.radius.md,
  border: `1px solid ${theme.colors.gray100}`,
}));

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.85rem',
});

const Value = styled.p<{ isEmpty?: boolean }>(({ theme, isEmpty }) => ({
  fontSize: '2rem',
  fontWeight: theme.font.weight.medium,
  color: isEmpty ? theme.colors.gray400 : theme.colors.textPrimary,
  transition: 'color 0.2s',
}));

const EmptyText = styled.span(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.colors.gray500,
  marginTop: '-0.3rem',
}));
