import { CLUB_CATEGORY } from '@/pages/user/Main/constant/clubCategory';
import {
  CategoryTabContainer,
  CategoryTab,
} from '@/pages/user/Main/components/ClubCategorySection/index.styled.tsx';

export const ClubCategorySection = () => {
  return (
    <>
      <CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTab key={category}>{category}</CategoryTab>
        ))}
      </CategoryTabContainer>
    </>
  );
};
