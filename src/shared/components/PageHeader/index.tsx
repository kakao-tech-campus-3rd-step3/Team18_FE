import * as S from './index.styled';

type Props = {
  clubName: string;
  category?: string;
};

export const PageHeader = ({ clubName, category }: Props) => {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>{clubName}</S.Title>
        {category && <S.Category>{category}</S.Category>}
      </S.TextWrapper>
    </S.Container>
  );
};
