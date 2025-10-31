import * as S from './index.styled';

interface ClubHeaderSectionProps {
  clubName: string;
  category?: string;
}

export const PageHeader = ({ clubName, category }: ClubHeaderSectionProps) => {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>{clubName}</S.Title>
        <S.Category>{category}</S.Category>
      </S.TextWrapper>
    </S.Container>
  );
};
