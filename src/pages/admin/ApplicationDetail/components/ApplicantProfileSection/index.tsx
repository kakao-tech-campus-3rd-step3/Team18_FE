import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import { ApplicantStarRating } from './ApplicantStarRating';
import { ApplicantStatusToggle } from './ApplicantStatusToggle';
import type { ApplicantStatus } from '@/types/dashboard';

type Props = {
  name?: string;
  department?: string;
  status?: ApplicantStatus;
  rating?: number;
};

export const ApplicantProfileSection = ({ name, department, status, rating }: Props) => {
  return (
    <Container>
      <LeftSection>
        <ProfileWrapper>
          <Text size='xl'>{name}</Text>
          <Text color='#616677'>{department}</Text>
        </ProfileWrapper>
        <ApplicantStarRating rating={rating} />
      </LeftSection>
      <RightSection>
        <ApplicantStatusToggle status={status} />
      </RightSection>
    </Container>
  );
};

const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
}));

const LeftSection = styled.div(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
}));

const RightSection = styled.div(() => ({}));

const ProfileWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px',
}));
