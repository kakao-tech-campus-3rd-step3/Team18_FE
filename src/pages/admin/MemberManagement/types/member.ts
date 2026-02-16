// TODO: 차후 api에 맞게 수정할 예정

// UI용 역할 타입 (화면 표시용)
export type MemberRole = '회장단' | '운영팀' | '동아리원';

// API용 역할 타입
export type ApiRole =
  | 'CLUB_ADMIN' // 회장단
  | 'CLUB_EXECUTIVE' // 운영팀
  | 'CLUB_MEMBER'; // 동아리원

// 학적상태 타입
export type AcademicStatus =
  | 'ENROLLED' // 재학
  | 'LEAVE_OF_ABSENCE' // 휴학
  | 'GRADUATED' // 졸업
  | 'COMPLETED' // 수료
  | 'EXPELLED'; // 제적

// 동아리원 기본 타입
export type Member = {
  id: number;
  name: string;
  studentId: string;
  department: string;
  phoneNumber: string;
  role: MemberRole;
  joinDate: string;
};

// 동아리원 추가 폼 데이터 타입
export type AddMemberFormData = {
  name: string;
  studentId: string;
  phoneNumber: string;
  college: string;
  department: string;
  academicStatus: AcademicStatus;
  role: ApiRole;
  joinDate: string; // YYYY-MM
};

// 정렬 옵션 타입
export type SortOption = '이름순' | '등록순';
