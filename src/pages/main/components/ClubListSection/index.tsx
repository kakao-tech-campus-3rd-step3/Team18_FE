import { useClub } from '@/pages/main/hook/useClub';
import { Grid } from '@/pages/main/components/ClubListSection/ClubGrid';
import { ClubItem } from '@/pages/main/components/ClubListSection/ClubItem';
import {
  ClubCategoryText,
  ClubIntroduction,
  ClubNameText,
  RecruitStatusBox,
  RecruitStatusText,
} from '@/pages/main/components/ClubListSection/ClubInfo';

const ClubListSection = () => {
  const { clubs, isLoading } = useClub();

  return (
    <>
      {isLoading && <div>로딩중입니다...</div>}
      <Grid>
        {clubs?.map((club) => (
          <ClubItem key={club.id}>
            <ClubCategoryText>{club.category}</ClubCategoryText>

            <ClubNameText>{club.name}</ClubNameText>
            <ClubIntroduction>{club.short_Introduction}</ClubIntroduction>
            <RecruitStatusBox status={club.recruit_status}>
              <RecruitStatusText status={club.recruit_status}>
                {club.recruit_status}
              </RecruitStatusText>
            </RecruitStatusBox>
          </ClubItem>
        ))}
      </Grid>
    </>
  );
};

export default ClubListSection;
