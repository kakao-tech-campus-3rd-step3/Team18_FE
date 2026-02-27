import { useState } from 'react';
import { Text } from '@/shared/components/Text';
import { formatDateWithoutYear, formatTime } from '@/shared/utils/dateUtils';
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
  const [selectedScheduleDate, setSelectedScheduleDate] = useState<string>(
    interviewSchedule?.[0]?.date ?? '',
  );
  const handleSlotClick = (date: string, time: string) => {
    onTimeSelect(`${date}T${time}`);
  };

  const isSelected = (date: string, time: string) => confirmedTime === `${date}T${time}`;

  const activeSchedule = interviewSchedule?.find((s) => s.date === selectedScheduleDate);

  return (
    <S.Container>
      <S.Section>
        {interviewSchedule?.length ? (
          <>
            <S.DateTabsContainer>
              {interviewSchedule.map((schedule) => (
                <S.DateTab
                  key={schedule.date}
                  $active={schedule.date === selectedScheduleDate}
                  onClick={() => setSelectedScheduleDate(schedule.date)}
                >
                  {formatDateWithoutYear(schedule.date)}
                </S.DateTab>
              ))}
            </S.DateTabsContainer>
            <S.SlotsContainer>
              {activeSchedule?.slots.map((slot) => (
                <S.TimeSlot
                  key={slot.time}
                  $selected={isSelected(selectedScheduleDate, slot.time)}
                  onClick={() => handleSlotClick(selectedScheduleDate, slot.time)}
                >
                  <S.SlotTime>{formatTime(slot.time)}</S.SlotTime>
                  <S.SlotCount>({slot.assignedCount}명 선택)</S.SlotCount>
                </S.TimeSlot>
              ))}
            </S.SlotsContainer>
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
            {interviewInfo.map((info) => (
              <S.AvailableTimesRow key={info.interviewDate}>
                <S.DateLabel>{formatDateWithoutYear(info.interviewDate)}</S.DateLabel>
                <S.AvailableTimes>
                  {(info.availableTimes ?? []).map(formatTime).join(', ')}
                </S.AvailableTimes>
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
