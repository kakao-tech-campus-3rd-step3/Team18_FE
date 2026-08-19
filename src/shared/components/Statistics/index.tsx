import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { SectionHeading } from '@/shared/components/SectionHeading';
import { useClubStatistics } from '@/shared/hooks/useClubStatistics';
import { formatHourMinute } from '@/shared/utils/dateUtils';
import { BarChart } from './BarChart';
import { DIMENSION_TITLE, MASKED_MESSAGE, MIN_VISIBLE_APPLICANTS, SCOPE_TITLE } from './constants';
import * as S from './index.styled';
import { TrendChart } from './TrendChart';
import type { StatisticsScope } from '@/shared/types/statistics';

type Props = {
  clubId: number;
  scope: StatisticsScope;
};

export const StatisticsSection = ({ clubId, scope }: Props) => {
  const { data, isPending, isError } = useClubStatistics(clubId, scope);

  if (isPending) {
    return <LoadingSpinner />;
  }

  /** 지원폼이 없는 동아리는 404가 내려온다. 지원자가 보는 화면에서는 섹션 자체를 노출하지 않는다. */
  if (isError || !data) {
    return scope === 'admin' ? (
      <S.Container>
        <SectionHeading>{SCOPE_TITLE[scope]}</SectionHeading>
        <S.Notice>통계를 불러오지 못했습니다.</S.Notice>
      </S.Container>
    ) : null;
  }

  const results = data.results.filter((result) => result.buckets.length > 0);
  const isHidden =
    data.masked || data.totalApplicants < MIN_VISIBLE_APPLICANTS || results.length === 0;

  return (
    <S.Container>
      {scope === 'public' && <S.Divider />}
      <S.Header>
        <SectionHeading>{SCOPE_TITLE[scope]}</SectionHeading>
        <S.Caption>
          총 지원자 {data.totalApplicants}명 · {formatHourMinute(data.calculatedAt)} 기준
        </S.Caption>
      </S.Header>

      {isHidden ? (
        <S.Notice>{MASKED_MESSAGE[scope]}</S.Notice>
      ) : (
        <S.Grid>
          {results.map((result) => (
            <S.Card key={result.dimension} isWide={result.type === 'TIME_SERIES'}>
              <S.CardTitle>{DIMENSION_TITLE[result.dimension]}</S.CardTitle>
              {result.type === 'TIME_SERIES' ? (
                <TrendChart buckets={result.buckets} />
              ) : (
                <BarChart buckets={result.buckets} />
              )}
            </S.Card>
          ))}
        </S.Grid>
      )}
    </S.Container>
  );
};
