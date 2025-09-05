export type RecruitStatus = '모집중' | '모집마감';

export type Club = {
  id: number;
  name: string;
  category: string;
  short_Introduction: string;
  recruit_status: RecruitStatus;
};

export type ClubResponse = {
  clubs: Club[];
  //pagination 관련 값들...(논의 후)
};
