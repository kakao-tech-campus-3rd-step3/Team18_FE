export type StatisticsDimension = 'GENDER' | 'ADMISSION_YEAR' | 'FACULTY' | 'DAILY_APPLICATIONS';

export type StatisticsDimensionType = 'CATEGORICAL' | 'ORDINAL' | 'TIME_SERIES';

export type StatisticsScope = 'public' | 'admin';

export type StatisticsBucket = {
  key: string;
  label: string;
  count: number;
  ratio?: number;
};

export type StatisticsDimensionResult = {
  dimension: StatisticsDimension;
  type: StatisticsDimensionType;
  buckets: StatisticsBucket[];
};

export type ClubStatistics = {
  clubApplyFormId: number;
  totalApplicants: number;
  snapshot: boolean;
  masked: boolean;
  calculatedAt: string;
  results: StatisticsDimensionResult[];
};
