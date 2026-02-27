import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateInterviewTime } from '@/pages/admin/Dashboard/hooks/useUpdateInterviewTime';
import { STATUS_LABEL } from '@/pages/admin/Dashboard/utils/labelMap';
import { Modal } from '@/shared/components/Modal';
import { useModal } from '@/shared/hooks/useModal';
import { formatDateTime } from '@/shared/utils/dateUtils';
import * as S from './index.styled';
import { InterviewTimeContentModal } from './InterviewTimeContentModal';
import type { ApplicantData, InterviewSchedule } from '@/pages/admin/Dashboard/types/dashboard';

type Props = ApplicantData & {
  interviewSchedule: InterviewSchedule[];
  interviewRequired: boolean;
  onClick: (id: number) => void;
};

export const ApplicantListItem = React.memo(function ApplicantListItem({
  applicantId,
  name,
  studentId,
  department,
  phoneNumber,
  email,
  status,
  confirmedTime,
  interviewInfo,
  interviewSchedule,
  interviewRequired,
  onClick,
}: Props) {
  const { clubId } = useParams();
  const { isOpen, openModal, closeModal } = useModal();
  const { updateTime } = useUpdateInterviewTime(parseInt(clubId ?? '', 10), applicantId);
  const timeSetterRef = useRef<HTMLButtonElement>(null);

  const handleTimeSetterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openModal();
  };

  const handleTimeSelect = (interviewAt: string) => {
    updateTime(interviewAt, { onSuccess: closeModal });
  };
  return (
    <>
      <S.ItemWrapper hasInterview={interviewRequired} onClick={() => onClick(applicantId)}>
        <S.InfoText>{name || '-'}</S.InfoText>
        <S.InfoText>{studentId || '-'}</S.InfoText>
        <S.InfoText title={department}>{department || '-'}</S.InfoText>
        <S.InfoText title={phoneNumber}>{phoneNumber || '-'}</S.InfoText>
        <S.InfoText title={email}>{email || '-'}</S.InfoText>
        <S.StatusBadge status={status}>{STATUS_LABEL[status] || '-'}</S.StatusBadge>
        {interviewRequired &&
          (status === 'APPROVED' ? (
            <S.InfoText>
              {confirmedTime ? (
                <S.ConfirmedTimeSetter ref={timeSetterRef} onClick={handleTimeSetterClick}>
                  {formatDateTime(confirmedTime)}
                </S.ConfirmedTimeSetter>
              ) : (
                <S.TimeSetter ref={timeSetterRef} onClick={handleTimeSetterClick}>
                  시간 선택
                </S.TimeSetter>
              )}
            </S.InfoText>
          ) : (
            <S.InfoText>-</S.InfoText>
          ))}
      </S.ItemWrapper>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title='동아리 면접 공지 일정'
        size='md'
        variant='popover'
        anchorRef={timeSetterRef}
      >
        <InterviewTimeContentModal
          interviewInfo={interviewInfo}
          interviewSchedule={interviewSchedule}
          confirmedTime={confirmedTime}
          onTimeSelect={handleTimeSelect}
        />
      </Modal>
    </>
  );
});
