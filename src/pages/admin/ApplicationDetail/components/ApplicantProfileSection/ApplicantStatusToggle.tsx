import styled from '@emotion/styled';
import { useState } from 'react';
import { ApplicantStatusButton } from './ApplicantStatusButton';
import type { ApplicantStatus } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  status?: ApplicantStatus;
  updateStatus: (status: ApplicantStatus) => void;
};

export const ApplicantStatusToggle = ({ status, updateStatus }: Props) => {
  const [statusOption, setStatusOption] = useState(status);

  const handleClick = (newStatus: ApplicantStatus) => {
    setStatusOption(newStatus);
    updateStatus(newStatus);
  };

  return (
    <Container>
      <ApplicantStatusButton
        label={'합격'}
        value={'ACCEPTED'}
        selected={statusOption === 'ACCEPTED'}
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
};

const Container = styled.div(() => ({
  display: 'flex',
  gap: '2rem',
}));
