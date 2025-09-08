import { useClub } from '@/pages/user/Main/hook/useClub';
import {
  ClubCateogryText,
  ClubIntroduction,
  ClubItem,
  ClubListContainer,
  ClubNameText,
  Grid,
  RecruitStatusBox,
  RecruitStatusText,
} from '@/pages/user/Main/components/ClubListSection/Club.style.tsx';




const ClubListSection = () => {
  const { clubs, isLoading, error } = useClub();

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러발생 : {error.message}</div>;

  return (
    <ClubListContainer>
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
    </ClubListContainer>
  );
};

export default ClubListSection;
