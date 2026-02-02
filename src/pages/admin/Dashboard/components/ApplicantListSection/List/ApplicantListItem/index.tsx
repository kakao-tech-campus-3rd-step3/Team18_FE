import React, { useRef } from 'react';
import { STATUS_LABEL } from '@/pages/admin/Dashboard/utils/labelMap';
import { Modal } from '@/shared/components/Modal';
import { useModal } from '@/shared/hooks/useModal';
import * as S from './index.styled';
import { InterviewTimeContentModal } from './InterviewTimeContentModal';
import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

type Props = ApplicantData & {
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
  onClick,
}: Props) {
  const { isOpen, openModal, closeModal } = useModal();
  const timeSetterRef = useRef<HTMLButtonElement>(null);

  const handleTimeSetterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openModal();
  };

  return (
    <>
      <S.ItemWrapper onClick={() => onClick(applicantId)}>
        <S.InfoText>{name || '-'}</S.InfoText>
        <S.InfoText>{studentId || '-'}</S.InfoText>
        <S.InfoText>{department || '-'}</S.InfoText>
        <S.InfoText>{phoneNumber || '-'}</S.InfoText>
        <S.InfoText>{email || '-'}</S.InfoText>
        <S.StatusBadge status={status}>{STATUS_LABEL[status] || '-'}</S.StatusBadge>
        {status === 'APPROVED' ? (
          <S.InfoText>
            {confirmedTime || (
              <S.TimeSetter ref={timeSetterRef} onClick={handleTimeSetterClick}>
                시간 선택
              </S.TimeSetter>
            )}
          </S.InfoText>
        ) : (
          <S.InfoText>-</S.InfoText>
        )}
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
        />
      </Modal>
    </>
  );
});
