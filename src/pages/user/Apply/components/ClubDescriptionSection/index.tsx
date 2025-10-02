import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';

type props = {
  title: string;
  description: string | undefined;
};

export const ClubDescription = ({ title }: props) => {
  return (
    <TextWrapper>
      <Title>지원서 작성하기</Title>
      <Text size='xl' weight='regular' color='#4E5968'>
        {title}
      </Text>
    </TextWrapper>
  );
};

const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '4rem 0',
});

const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.medium,
}));
