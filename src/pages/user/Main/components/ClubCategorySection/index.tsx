import { CLUB_CATEGORY, type ClubCategory } from '@/pages/user/Main/constant/clubCategory';
import {
  CategoryTabContainer,
  CategoryTab,
} from '@/pages/user/Main/components/ClubCategorySection/index.styled.tsx';
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
      <CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTab
            key={category}
            onClick={() => {
              handleClick(category);
            }}
            selected={selected === category}
          >
            {category}
          </CategoryTab>
        ))}
      </CategoryTabContainer>
    </>
  );
};
