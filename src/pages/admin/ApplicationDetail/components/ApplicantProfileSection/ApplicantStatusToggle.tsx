import styled from '@emotion/styled';
import { ApplicantStatusButton } from './ApplicantStatusButton';
import { useState } from 'react';
import type { ApplicantStatus } from '@/types/dashboard';

type Props = {
  status?: ApplicantStatus;
};

export const ApplicantStatusToggle = ({ status }: Props) => {
  const [statusOption, setStatusOption] = useState(status);

  return (
    <Container>
      <ApplicantStatusButton
        label={'합격'}
        value={'ACCEPTED'}
        selected={statusOption === 'ACCEPTED'}
        onClick={setStatusOption}
      />
      <ApplicantStatusButton
        label={'불합격'}
        value={'REJECTED'}
        selected={statusOption === 'REJECTED'}
        onClick={setStatusOption}
      />
      <ApplicantStatusButton
        label={'미정'}
        value={'PENDING'}
        selected={statusOption === 'PENDING'}
        onClick={setStatusOption}
      />
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
}));
