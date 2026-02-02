import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
});

export const Section = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const SectionTitle = styled.h3(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: 600,
  color: theme.colors.gray700,
  paddingBottom: '0.5rem',
  borderBottom: `1px solid ${theme.colors.gray200}`,
}));

export const ScheduleRow = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
});
export const SchedulDateLabel = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: 600,
  color: theme.colors.gray700,
  minWidth: '2.5rem',
  paddingTop: '0.5rem',
}));

export const DateLabel = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: 600,
  color: theme.colors.gray700,
  minWidth: '2.5rem',
}));

export const SlotsContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  flex: 1,
});

export const TimeSlot = styled.button<{ $selected?: boolean }>(({ theme, $selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem 0.75rem',
  borderRadius: theme.radius.md,
  border: `1px solid ${$selected ? theme.colors.primary : theme.colors.gray300}`,
  backgroundColor: $selected ? theme.colors.primary00 : theme.colors.bg,
  cursor: 'pointer',
  transition: 'all 0.2s',
  minWidth: '4rem',

  '&:hover': {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary00,
  },
}));

export const SlotTime = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: 500,
  color: theme.colors.gray800,
}));

export const SlotCount = styled.span(({ theme }) => ({
  fontSize: theme.font.size.xs,
  color: theme.colors.gray500,
  marginTop: '0.125rem',
}));

export const AvailableTimesRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const AvailableTimes = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.gray600,
}));
