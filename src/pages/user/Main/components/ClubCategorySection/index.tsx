import { CLUB_CATEGORY } from '@/pages/user/Main/constant/clubCategory';
import  {
  CategoryTabContainer,
  CategoryTabStyle
} from '@/pages/user/Main/components/ClubCategorySection/index.styled.tsx';

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
