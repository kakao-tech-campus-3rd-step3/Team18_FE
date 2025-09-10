import { CLUB_CATEGORY, type ClubCategory } from '@/pages/user/Main/constant/clubCategory';
import {
  CategoryTabContainer,
  CategoryTab,
} from '@/pages/user/Main/components/ClubCategorySection/index.styled.tsx';

type Props = {
  onSelect: (category: ClubCategory) => void;
  selected?: ClubCategory;
};

export const ClubCategorySection = ({ onSelect, selected }: Props) => {
  return (
    <>
      <CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTab
            key={category}
            onClick={() => {
              onSelect(category);
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
