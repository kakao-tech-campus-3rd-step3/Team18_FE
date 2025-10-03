import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CLUB_CATEGORY,
  type ClubCategory,
  type ClubCategoryEng,
} from '@/pages/user/Main/constant/clubCategory';
import { korToEngCategory } from '@/pages/user/Main/utils/formatting.ts';
import * as S from './index.styled.ts';

type Props = {
  onSelect: (category: ClubCategoryEng) => void;
  selected?: ClubCategoryEng;
};

const ClubCategorySection = ({ onSelect, selected }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (newCategory: ClubCategory) => {
    const engCategory = korToEngCategory[newCategory];
    onSelect(engCategory);
    searchParams.set('category', engCategory);
    setSearchParams(searchParams);
  };

  return (
    <>
      <S.CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <S.CategoryTab
            key={category}
            onClick={() => {
              handleClick(category);
            }}
            selected={selected === korToEngCategory[category]}
          >
            {category}
          </S.CategoryTab>
        ))}
      </S.CategoryTabContainer>
    </>
  );
};
export const MemoizedClubCategorySection = memo(ClubCategorySection);
