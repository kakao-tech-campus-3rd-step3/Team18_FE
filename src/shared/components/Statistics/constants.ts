import type { StatisticsDimension, StatisticsScope } from '@/shared/types/statistics';

/**
 * 지원자를 특정할 수 없도록 공개 통계는 이 인원 미만이면 분포를 표시하지 않는다.
 * 지원자 명단을 직접 관리하는 관리자 통계에는 적용하지 않고 원본을 그대로 노출한다.
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
  admin: '지원자 수가 적어 분포가 제공되지 않았습니다.',
};

export const EMPTY_MESSAGE: Record<StatisticsScope, string> = {
  public: '아직 지원자가 없어요.',
  admin: '아직 지원자가 없습니다.',
};
