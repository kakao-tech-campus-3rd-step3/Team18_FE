import { Text } from '@/shared/components/Text';
import styled from '@emotion/styled';

type props = {
  title: string;
  description: string | undefined;
};

export const ClubDescription = ({ title, description }: props) => {
  return (
    <TextWrapper>
      <Text size='xl' weight='bold' children={title}></Text>
      <Text>{description}</Text>
    </TextWrapper>
  );
};

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 35,
  padding: 20,
});
