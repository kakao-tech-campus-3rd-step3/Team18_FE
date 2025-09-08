import { CLUB_CATEGORY } from '@/pages/user/Main/constant/clubCategory';
import CategoryTab, {
  CategoryTabContainer,
} from '@/pages/user/Main/components/ClubCategorySection/CategoryTab';

const ClubCategorySection = () => {
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

export default ClubCategorySection;
