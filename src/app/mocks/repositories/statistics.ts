import type {
  ClubStatistics,
  StatisticsBucket,
  StatisticsDimension,
  StatisticsDimensionResult,
} from '@/shared/types/statistics';

/** 지원자 3명 미만이라 통계가 비공개되는 상태를 확인하기 위한 동아리 */
const MASKED_CLUB_ID = 2;

const TOTAL_APPLICANTS = 214;
const DAILY_START_DATE = '2026-03-02';
const DAILY_COUNTS = [12, 24, 31, 18, 9, 5, 0, 7, 14, 22, 28, 19, 16, 9];

const toBuckets = (entries: [key: string, label: string, count: number][]): StatisticsBucket[] =>
  entries.map(([key, label, count]) => ({
    key,
    label,
    count,
    ratio: Number((count / TOTAL_APPLICANTS).toFixed(3)),
  }));

const toDailyBuckets = (): StatisticsBucket[] =>
  DAILY_COUNTS.map((count, index) => {
    const date = new Date(DAILY_START_DATE);
    date.setDate(date.getDate() + index);

    return {
      key: date.toISOString().slice(0, 10),
      label: `${date.getMonth() + 1}월 ${date.getDate()}일`,
      count,
    };
  });

const MOCK_RESULTS: StatisticsDimensionResult[] = [
  {
    dimension: 'GENDER',
    type: 'CATEGORICAL',
    buckets: toBuckets([
      ['MALE', '남성', 121],
      ['FEMALE', '여성', 91],
      ['UNKNOWN', '미입력', 2],
    ]),
  },
  {
    dimension: 'ADMISSION_YEAR',
    type: 'ORDINAL',
    buckets: toBuckets([
      ['OLDER', '그 이전', 12],
      ['21', '21학번', 30],
      ['22', '22학번', 58],
      ['23', '23학번', 47],
      ['24', '24학번', 40],
      ['25', '25학번', 24],
      ['UNKNOWN', '미입력', 3],
    ]),
  },
  {
    dimension: 'FACULTY',
    type: 'CATEGORICAL',
    buckets: toBuckets([
      ['ENGINEERING', '공과대학', 74],
      ['NATURAL_SCIENCES', '자연과학대학', 37],
      ['SOCIAL_SCIENCES', '사회과학대학', 33],
      ['HUMANITIES', '인문대학', 25],
      ['BUSINESS', '경영대학', 20],
      ['ETC', '기타', 20],
      ['UNKNOWN', '미입력', 5],
    ]),
  },
  {
    dimension: 'DAILY_APPLICATIONS',
    type: 'TIME_SERIES',
    buckets: toDailyBuckets(),
  },
];

export const statisticsRepository = {
  getStatistics: (clubId: number, dimensions: StatisticsDimension[]): ClubStatistics => {
    const isMasked = clubId === MASKED_CLUB_ID;

    return {
      clubApplyFormId: clubId,
      totalApplicants: isMasked ? 2 : TOTAL_APPLICANTS,
      snapshot: false,
      masked: isMasked,
      calculatedAt: new Date().toISOString(),
      results: isMasked
        ? []
        : MOCK_RESULTS.filter(
            (result) => dimensions.length === 0 || dimensions.includes(result.dimension),
          ),
    };
  },
};
