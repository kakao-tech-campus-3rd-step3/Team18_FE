import type { StatisticsDimension, StatisticsScope } from '@/shared/types/statistics';

/**
 * 지원자를 특정할 수 없도록 이 인원 미만이면 분포를 표시하지 않는다.
 * 공개 통계는 서버가 masked로 내려주고, 관리자 통계는 마스킹이 적용되지 않으므로 화면에서 동일 기준을 적용한다.
 */
export const MIN_VISIBLE_APPLICANTS = 3;

export const DIMENSION_TITLE: Record<StatisticsDimension, string> = {
  GENDER: '성별',
  ADMISSION_YEAR: '입학연도',
  FACULTY: '학부',
  DAILY_APPLICATIONS: '일자별 지원 추이',
};

export const SCOPE_TITLE: Record<StatisticsScope, string> = {
  public: '지원 현황',
  admin: '지원자 통계',
};

export const MASKED_MESSAGE: Record<StatisticsScope, string> = {
  public: `지원자가 ${MIN_VISIBLE_APPLICANTS}명 이상 모이면 통계를 볼 수 있어요.`,
  admin: `지원자가 ${MIN_VISIBLE_APPLICANTS}명 미만이라 지원자 보호를 위해 통계를 표시하지 않습니다.`,
};
