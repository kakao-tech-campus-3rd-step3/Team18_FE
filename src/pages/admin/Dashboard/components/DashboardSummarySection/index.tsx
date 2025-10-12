import styled from '@emotion/styled';
import { GoPeople, GoCalendar } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { useDashboardSummary } from '@/pages/admin/Dashboard/hooks/useDashboardSummary';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { formatDate } from '@/utils/dateUtils';
import { SummaryCard } from './SummaryCard';

export const DashboardSummarySection = () => {
  const clubId = '1';

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
      ? `${formatDate(summary.startDay)} ~ ${formatDate(summary.endDay)}`
      : '-';

  return (
    <Wrapper>
      <SummaryCard
        label={'총 지원자'}
        value={summary.totalApplicantCount ?? 0}
        image={<GoPeople size='2.3rem' />}
      />
      <SummaryCard
        label={'대기중인 지원서'}
        value={summary.pendingApplicationCount ?? 0}
        image={<IoDocumentTextOutline size='2.3rem' />}
      />
      <SummaryCard
        label={'이번 모집 일정'}
        value={recruitmentPeriod}
        image={<GoCalendar size='2.3rem' />}
        isEmpty={!summary.startDay || !summary.endDay}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8.5rem',

  '> *': {
    position: 'relative',
  },
  '> *:not(:last-of-type)::after': {
    content: '""',
    position: 'absolute',
    right: '-4.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1px',
    height: '4rem',
    backgroundColor: theme.colors.gray300,
  },
}));
