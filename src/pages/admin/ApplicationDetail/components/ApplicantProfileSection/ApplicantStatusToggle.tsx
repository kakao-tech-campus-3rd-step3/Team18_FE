import styled from '@emotion/styled';
import { useState } from 'react';
import { ApplicantStatusButton } from './ApplicantStatusButton';
import type { ApplicationFilterOption } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  status?: ApplicationFilterOption;
  updateStatus: (status: ApplicationFilterOption) => void;
};

export const ApplicantStatusToggle = ({ status, updateStatus }: Props) => {
  const [statusOption, setStatusOption] = useState(status);

  const handleClick = (newStatus: ApplicationFilterOption) => {
    setStatusOption(newStatus);
    updateStatus(newStatus);
  };

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
};

const Container = styled.div(() => ({
  display: 'flex',
  gap: '2rem',
}));
