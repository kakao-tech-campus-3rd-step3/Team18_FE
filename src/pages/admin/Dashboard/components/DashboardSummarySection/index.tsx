import styled from '@emotion/styled';
import { useDashboardSummary } from '@/pages/admin/Dashboard/hooks/useDashboardSummary';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { formatDateWithoutYear } from '@/utils/dateUtils';
import { SummaryCard } from './SummaryCard';

export const DashboardSummarySection = () => {
  const clubId = 1;

  const { data: summary, isLoading, error } = useDashboardSummary(clubId);

  if (isLoading) return <LoadingSpinner />;
  if (error) {
    return <Wrapper>Error: {error.message}</Wrapper>;
  }
  if (!summary) {
    return null;
  }

  const recruitmentPeriod =
    summary.startDay && summary.endDay
      ? `${formatDateWithoutYear(summary.startDay)} ~ ${formatDateWithoutYear(summary.endDay)}`
      : '-';

  return (
    <Wrapper>
      <SummaryCard label={'총 지원자'} value={summary.totalApplicantCount ?? 0} />
      <SummaryCard label={'대기중인 지원서'} value={summary.pendingApplicationCount ?? 0} />
      <SummaryCard
        label={'이번 모집 일정'}
        value={recruitmentPeriod}
        isEmpty={!summary.startDay || !summary.endDay}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
});
