import { CLUB_CATEGORY } from '@/pages/main/constant/clubCategory';
import CategoryTap, {
  CategoryTapContainer,
} from '@/pages/main/components/ClubCategorySection/CategoryTap';

const ClubCategorySection = () => {
  return (
    <>
      <CategoryTapContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTap>{category}</CategoryTap>
        ))}
      </CategoryTapContainer>
    </>
  );
};

export default ClubCategorySection;
