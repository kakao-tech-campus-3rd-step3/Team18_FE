// TODO: 차후 api에 맞게 수정할 예정

export type MemberRole = '회장단' | '운영팀' | '동아리원';

export type Member = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  role: MemberRole;
  joinDate: string;
};

export type SortOption = '이름순' | '등록순';
