import styled from '@emotion/styled';
import { mockClubDetail } from '../mock';

export const ClubHeaderSection = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>{mockClubDetail.clubName}</Title>
        <Category>{mockClubDetail.category}</Category>
      </TextContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.font.size.xl,
  fontWeight: theme.font.weight.bold,
  margin: '1rem 0 0 0.5rem',
}));

const Category = styled.span(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textSecondary,
  margin: '0.5rem 0 0 0.5rem',
}));
