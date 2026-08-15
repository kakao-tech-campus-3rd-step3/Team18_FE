export type PopularClub = {
  clubId: number;
  /** 최근 24시간 동안 해당 동아리를 조회한 고유 사용자 수 */
  recentViewerCount: number;
  /** 최근 3분 안에 상세 진입 또는 조회 상태 갱신 요청을 보낸 고유 사용자 수 */
  activeViewerCount: number;
  /** 최근 24시간 고유 조회자가 기준치 이상이면 true */
  recentViewerBadge: boolean;
  /** 현재 활성 조회자가 기준치 이상이면 true */
  activeViewerBadge: boolean;
};
