import { engToKorCategory } from '@/shared/utils/formatting';
import * as S from './index.styled';
import type { ClubCategoryEng } from '@/shared/types/club';

type Props = {
  clubName: string;
  category?: ClubCategoryEng;
};

export const PageHeader = ({ clubName, category }: Props) => {
  const korCategory = category && engToKorCategory[category];

  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>{clubName}</S.Title>
        <S.Category>{korCategory}</S.Category>
      </S.TextWrapper>
    </S.Container>
  );
};
