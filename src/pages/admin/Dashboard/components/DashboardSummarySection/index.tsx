import styled from '@emotion/styled';
import { useDashboardSummary } from '@/pages/admin/Dashboard/hooks/useDashboardSummary';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { formatDateWithoutYear } from '@/utils/dateUtils';
import { SummaryCard } from './SummaryCard';
import { useParams } from 'react-router-dom';

export const DashboardSummarySection = () => {
  const { clubId } = useParams();

  const { data: summary, isLoading, error } = useDashboardSummary(Number(clubId));

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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 800px) {
    & > div:nth-of-type(3) {
      display: none;
    }
  }

  @media (max-width: 560px) {
    & > div:nth-of-type(2) {
      display: none;
    }
  }
`;
