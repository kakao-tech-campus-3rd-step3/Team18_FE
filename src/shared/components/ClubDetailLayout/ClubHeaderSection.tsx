import styled from '@emotion/styled';

interface ClubHeaderSectionProps {
  clubName: string;
  category: string;
}

export const ClubHeaderSection = ({ clubName, category }: ClubHeaderSectionProps) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>{clubName}</Title>
        <Category>{category}</Category>
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
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.medium,
  margin: '1rem 0 0 0.5rem',
}));

const Category = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
  margin: '0.5rem 0 0 0.5rem',
}));
