import { CLUB_CATEGORY, type ClubCategory } from '@/pages/user/Main/constant/clubCategory';
import * as S from './index.styled.ts';
import { useSearchParams } from 'react-router-dom';

type Props = {
  onSelect: (category: ClubCategory) => void;
  selected?: ClubCategory;
};

export const ClubCategorySection = ({ onSelect, selected }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (newCategory: ClubCategory) => {
    onSelect(newCategory);
    searchParams.set('category', newCategory);
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
            selected={selected === category}
          >
            {category}
          </S.CategoryTab>
        ))}
      </S.CategoryTabContainer>
    </>
  );
};
