import { formatDateWithoutYear } from '@/shared/utils/dateUtils';
import * as S from './InterviewTimeContentModal.styled';
import type { InterviewInfo, InterviewSchedule } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  interviewInfo?: InterviewInfo[];
  interviewSchedule?: InterviewSchedule[];
};

export const InterviewTimeContentModal = ({ interviewInfo, interviewSchedule }: Props) => {
  return (
    <S.Container>
      <S.Section>
        {interviewSchedule?.map((schedule) => (
          <S.ScheduleRow key={schedule.date}>
            <S.SchedulDateLabel>{formatDateWithoutYear(schedule.date)}</S.SchedulDateLabel>
            <S.SlotsContainer>
              {schedule.slots.map((slot) => (
                <S.TimeSlot key={slot.time}>
                  <S.SlotTime>{slot.time}</S.SlotTime>
                  <S.SlotCount>({slot.assignedCount}명 선택)</S.SlotCount>
                </S.TimeSlot>
              ))}
            </S.SlotsContainer>
          </S.ScheduleRow>
        ))}
      </S.Section>

      <S.Section>
        <S.SectionTitle>지원자 면접 희망 시간대</S.SectionTitle>
        {interviewInfo?.map((info) => (
          <S.AvailableTimesRow key={info.interviewDate}>
            <S.DateLabel>{formatDateWithoutYear(info.interviewDate)}</S.DateLabel>
            <S.AvailableTimes>{info.availableTimes.join(', ')}</S.AvailableTimes>
          </S.AvailableTimesRow>
        ))}
      </S.Section>
    </S.Container>
  );
};
