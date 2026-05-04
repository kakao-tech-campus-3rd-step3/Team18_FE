import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';
import { ApplicantStatusButton } from './ApplicantStatusButton';
import type { ApplicationStatus } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  status?: ApplicationStatus;
  updateStatus: (status: ApplicationStatus) => void;
};

export const ApplicantStatusToggle = memo(({ status, updateStatus }: Props) => {
  const [statusOption, setStatusOption] = useState(status);

  const handleClick = useCallback(
    (newStatus: ApplicationStatus) => {
      setStatusOption(newStatus);
      updateStatus(newStatus);
    },
    [updateStatus],
  );

  return (
    <Container>
      <ApplicantStatusButton
        label={'합격'}
        value={'APPROVED'}
        selected={statusOption === 'APPROVED'}
        onClick={handleClick}
      />
      <ApplicantStatusButton
        label={'불합격'}
        value={'REJECTED'}
        selected={statusOption === 'REJECTED'}
        onClick={handleClick}
      />
      <ApplicantStatusButton
        label={'미정'}
        value={'PENDING'}
        selected={statusOption === 'PENDING'}
        onClick={handleClick}
      />
    </Container>
  );
});
ApplicantStatusToggle.displayName = 'ApplicantStatusToggle';

const Container = styled.div(() => ({
  display: 'flex',
  gap: '1.5rem',
}));
