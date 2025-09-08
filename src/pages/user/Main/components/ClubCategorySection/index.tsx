import { CLUB_CATEGORY } from '@/pages/user/Main/constant/clubCategory';
import CategoryTabStyle, {
  CategoryTabContainer,
} from '@/pages/user/Main/components/ClubCategorySection/CategoryTab.style.tsx';

const ClubCategorySection = () => {
  return (
    <>
      <CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTabStyle key={category}>{category}</CategoryTabStyle>
        ))}
      </CategoryTabContainer>
    </>
  );
};

export default ClubCategorySection;
