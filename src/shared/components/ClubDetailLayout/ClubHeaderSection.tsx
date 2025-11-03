import styled from '@emotion/styled';
import { engToKorCategory } from '@/utils/formatting';
import type { ClubCategoryEng } from '@/types/club';

interface ClubHeaderSectionProps {
  clubName: string;
  category: ClubCategoryEng;
}

export const ClubHeaderSection = ({ clubName, category }: ClubHeaderSectionProps) => {
  const korCategory = engToKorCategory[category];

  return (
    <HeaderContainer>
      <TextContainer>
        <Title>{clubName}</Title>
        <Category>{korCategory}</Category>
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
