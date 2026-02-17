// UI용 역할 타입 (화면 표시용)
export type MemberRole = '회장단' | '운영팀' | '동아리원';

// API용 역할 타입
export type ApiRole =
  | 'CLUB_ADMIN' // 회장단
  | 'CLUB_EXECUTIVE' // 운영팀
  | 'CLUB_MEMBER'; // 동아리원

// API → UI 역할 매핑
export const API_ROLE_TO_UI: Record<ApiRole, MemberRole> = {
  CLUB_ADMIN: '회장단',
  CLUB_EXECUTIVE: '운영팀',
  CLUB_MEMBER: '동아리원',
};

// UI → API 역할 매핑
export const UI_ROLE_TO_API: Record<MemberRole, ApiRole> = {
  회장단: 'CLUB_ADMIN',
  운영팀: 'CLUB_EXECUTIVE',
  동아리원: 'CLUB_MEMBER',
};

// 동아리원 목록 조회 API 응답 타입
export type MemberApiResponse = {
  clubMemberProfileId: number;
  name: string;
  department: string;
  studentId: string;
  phoneNumber: string;
  role: ApiRole;
  joinDate: string;
};

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

// 동아리원 정보 수정 요청 타입 (role 제외 - 별도 API 사용)
export type UpdateMemberData = Partial<{
  name: string;
  studentId: string;
  phoneNumber: string;
  college: string;
  department: string;
  academicStatus: AcademicStatus;
  joinDate: string;
}>;

// 정렬 옵션 타입
export type SortOption = '이름순' | '등록순';
