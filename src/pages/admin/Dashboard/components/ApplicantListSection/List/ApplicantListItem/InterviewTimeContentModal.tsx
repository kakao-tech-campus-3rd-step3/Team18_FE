import { Text } from '@/shared/components/Text';
import { formatDateWithoutYear } from '@/shared/utils/dateUtils';
import * as S from './InterviewTimeContentModal.styled';
import type { InterviewInfo, InterviewSchedule } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  interviewInfo: InterviewInfo[];
  interviewSchedule: InterviewSchedule[];
  confirmedTime?: string | null;
  onTimeSelect: (interviewAt: string) => void;
};

export const InterviewTimeContentModal = ({
  interviewInfo,
  interviewSchedule,
  confirmedTime,
  onTimeSelect,
}: Props) => {
  const handleSlotClick = (date: string, time: string) => {
    onTimeSelect(`${date}T${time}:00`);
  };

  const isSelected = (date: string, time: string) => confirmedTime === `${date}T${time}:00`;

  return (
    <S.Container>
      <S.Section>
        {interviewSchedule?.length ? (
          <>
            {interviewSchedule?.map((schedule) => (
              <S.ScheduleRow key={schedule.date}>
                <S.ScheduleDateLabel>{formatDateWithoutYear(schedule.date)}</S.ScheduleDateLabel>
                <S.SlotsContainer>
                  {schedule.slots.map((slot) => (
                    <S.TimeSlot
                      key={slot.time}
                      $selected={isSelected(schedule.date, slot.time)}
                      onClick={() => handleSlotClick(schedule.date, slot.time)}
                    >
                      <S.SlotTime>{slot.time}</S.SlotTime>
                      <S.SlotCount>({slot.assignedCount}명 선택)</S.SlotCount>
                    </S.TimeSlot>
                  ))}
                </S.SlotsContainer>
              </S.ScheduleRow>
            ))}
          </>
        ) : (
          <Text color='#595959' size='sm'>
            ⚠️ 면접 일정을 먼저 등록해주세요
          </Text>
        )}
      </S.Section>
      <S.Section>
        <S.SectionTitle>지원자 면접 희망 시간대</S.SectionTitle>
        {interviewInfo?.length ? (
          <>
            {interviewInfo?.map((info) => (
              <S.AvailableTimesRow key={info.interviewDate}>
                <S.DateLabel>{formatDateWithoutYear(info.interviewDate)}</S.DateLabel>
                <S.AvailableTimes>{(info.availableTimes ?? []).join(', ')}</S.AvailableTimes>
              </S.AvailableTimesRow>
            ))}
          </>
        ) : (
          <Text color='#595959' size='sm'>
            ⚠️ 지원자가 선택한 시간이 없습니다
          </Text>
        )}
      </S.Section>
    </S.Container>
  );
};
