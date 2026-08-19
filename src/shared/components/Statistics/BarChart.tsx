import styled from '@emotion/styled';
import type { StatisticsBucket } from '@/shared/types/statistics';

const UNKNOWN_KEY = 'UNKNOWN';

type Props = {
  buckets: StatisticsBucket[];
};

const formatRatio = (ratio: number) => `${(ratio * 100).toFixed(1)}%`;

export const BarChart = ({ buckets }: Props) => {
  const maxCount = Math.max(...buckets.map((bucket) => bucket.count), 1);

  return (
    <List>
      {buckets.map((bucket) => (
        <Row key={bucket.key}>
          <Label title={bucket.label}>{bucket.label}</Label>
          <Track>
            <Bar
              isUnknown={bucket.key === UNKNOWN_KEY}
              style={{ width: `${(bucket.count / maxCount) * 100}%` }}
            />
          </Track>
          <Value>
            {bucket.count}명
            {bucket.ratio !== undefined && <Ratio>{formatRatio(bucket.ratio)}</Ratio>}
          </Value>
        </Row>
      ))}
    </List>
  );
};

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  width: '100%',
});

const Row = styled.li({
  display: 'grid',
  gridTemplateColumns: '5.5rem 1fr 5rem',
  alignItems: 'center',
  gap: '0.75rem',
});

const Label = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const Track = styled.div(({ theme }) => ({
  height: '0.75rem',
  borderRadius: theme.radius.sm,
  backgroundColor: theme.colors.gray100,
  overflow: 'hidden',
}));

const Bar = styled.div<{ isUnknown: boolean }>(({ theme, isUnknown }) => ({
  height: '100%',
  borderRadius: theme.radius.sm,
  backgroundColor: isUnknown ? theme.colors.gray300 : theme.colors.primary,
  transition: 'width 0.3s ease',
}));

const Value = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'flex-end',
  gap: '0.25rem',
  fontSize: theme.font.size.sm,
  color: theme.colors.textPrimary,
}));

const Ratio = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.textSecondary,
}));
