import { CLUB_CATEGORY } from '@/pages/main/constant/clubCategory';
import CategoryTab, {
  CategoryTabContainer,
} from '@/pages/main/components/ClubCategorySection/CategoryTab';

const ClubCategorySection = () => {
  return (
    <>
      <CategoryTabContainer>
        {CLUB_CATEGORY.map((category) => (
          <CategoryTab>{category}</CategoryTab>
        ))}
      </CategoryTabContainer>
    </>
  );
};

export default ClubCategorySection;
