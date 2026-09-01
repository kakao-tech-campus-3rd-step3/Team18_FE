import styled from '@emotion/styled';
import type { StatisticsBucket } from '@/shared/types/statistics';

const VIEW_BOX = { width: 640, height: 200 };
const PADDING = { top: 16, right: 12, bottom: 26, left: 34 };
const MAX_DOT_COUNT = 20;

const INNER_WIDTH = VIEW_BOX.width - PADDING.left - PADDING.right;
const INNER_HEIGHT = VIEW_BOX.height - PADDING.top - PADDING.bottom;

type Props = {
  buckets: StatisticsBucket[];
};

/** 첫날·중간·마지막 라벨만 노출해 x축이 빽빽해지지 않도록 한다. */
const getVisibleLabelIndexes = (length: number) => {
  if (length <= 1) return [0];
  if (length === 2) return [0, 1];
  return [0, Math.floor((length - 1) / 2), length - 1];
};

export const TrendChart = ({ buckets }: Props) => {
  const maxCount = Math.max(...buckets.map((bucket) => bucket.count), 1);
  const lastIndex = buckets.length - 1;

  const points = buckets.map((bucket, index) => ({
    x:
      lastIndex === 0
        ? PADDING.left + INNER_WIDTH / 2
        : PADDING.left + (index / lastIndex) * INNER_WIDTH,
    y: PADDING.top + INNER_HEIGHT - (bucket.count / maxCount) * INNER_HEIGHT,
  }));

  const line = points.map(({ x, y }) => `${x},${y}`).join(' ');
  const baseline = PADDING.top + INNER_HEIGHT;
  const area = `${points[0].x},${baseline} ${line} ${points[lastIndex].x},${baseline}`;
  const visibleLabelIndexes = getVisibleLabelIndexes(buckets.length);
  const totalCount = buckets.reduce((sum, bucket) => sum + bucket.count, 0);

  return (
    <Svg
      viewBox={`0 0 ${VIEW_BOX.width} ${VIEW_BOX.height}`}
      role='img'
      aria-label={`일자별 지원 추이. 총 ${totalCount}명, 하루 최대 ${maxCount}명`}
    >
      <GridLine x1={PADDING.left} y1={baseline} x2={VIEW_BOX.width - PADDING.right} y2={baseline} />
      <GridLine
        x1={PADDING.left}
        y1={PADDING.top}
        x2={VIEW_BOX.width - PADDING.right}
        y2={PADDING.top}
      />

      <AxisLabel x={PADDING.left - 8} y={baseline} textAnchor='end' dominantBaseline='middle'>
        0
      </AxisLabel>
      <AxisLabel x={PADDING.left - 8} y={PADDING.top} textAnchor='end' dominantBaseline='middle'>
        {maxCount}
      </AxisLabel>

      <Area points={area} />
      <Line points={line} />

      {buckets.length <= MAX_DOT_COUNT &&
        points.map((point, index) => (
          <Dot key={buckets[index].key} cx={point.x} cy={point.y} r={3} />
        ))}

      {visibleLabelIndexes.map((index) => (
        <AxisLabel
          key={buckets[index].key}
          x={points[index].x}
          y={baseline + 16}
          textAnchor={index === 0 ? 'start' : index === lastIndex ? 'end' : 'middle'}
        >
          {buckets[index].label}
        </AxisLabel>
      ))}
    </Svg>
  );
};

const Svg = styled.svg({
  width: '100%',
  height: 'auto',
});

const GridLine = styled.line(({ theme }) => ({
  stroke: theme.colors.gray100,
  strokeWidth: 1,
}));

const Area = styled.polyline(({ theme }) => ({
  fill: theme.colors.primary,
  fillOpacity: 0.08,
  stroke: 'none',
}));

const Line = styled.polyline(({ theme }) => ({
  fill: 'none',
  stroke: theme.colors.primary,
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}));

const Dot = styled.circle(({ theme }) => ({
  fill: theme.colors.bg,
  stroke: theme.colors.primary,
  strokeWidth: 2,
}));

const AxisLabel = styled.text(({ theme }) => ({
  fill: theme.colors.textSecondary,
  fontSize: theme.font.size.xs,
}));
