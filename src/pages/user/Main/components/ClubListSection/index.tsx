import { useClub } from '@/pages/user/Main/hook/useClub';
import { Grid } from '@/pages/user/Main/components/ClubListSection/ClubGrid';
import { ClubItem } from '@/pages/user/Main/components/ClubListSection/ClubItem';
import {
  ClubCateogryText,
  ClubIntroduction,
  ClubNameText,
  RecruitStatusBox,
  RecruitStatusText,
} from '@/pages/user/Main/components/ClubListSection/ClubInfo';

const ClubListSection = () => {
  const { clubs, isLoading, error } = useClub();

  return (
    <>
      {isLoading && <div>로딩중입니다...</div>}
      <Grid>
        {clubs?.map((club) => (
          <ClubItem key={club.id}>
            <ClubCateogryText>{club.category}</ClubCateogryText>

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
