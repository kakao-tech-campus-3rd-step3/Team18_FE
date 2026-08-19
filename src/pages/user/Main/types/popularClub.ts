export type PopularClub = {
  clubId: number;
  /** 최근 24시간 고유 조회자 수 */
  recentViewerCount: number;
  /** 최근 3분 활성 조회자 수 */
  activeViewerCount: number;
  /** 최근 24시간 조회자 수가 기준치 이상인지 */
  recentViewerBadge: boolean;
  /** 현재 활성 조회자 수가 기준치 이상인지 */
  activeViewerBadge: boolean;
};
