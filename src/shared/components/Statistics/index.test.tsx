import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchClubStatistics } from '@/app/api/statistics';
import { theme } from '@/app/styles/theme';
import { StatisticsSection } from './index';
import type { ClubStatistics } from '@/shared/types/statistics';

vi.mock('@/app/api/statistics');

const mockedFetch = vi.mocked(fetchClubStatistics);

const createStatistics = (overrides: Partial<ClubStatistics> = {}): ClubStatistics => ({
  clubApplyFormId: 1,
  totalApplicants: 10,
  snapshot: false,
  masked: false,
  calculatedAt: '2026-03-14T23:59:30+09:00',
  results: [
    {
      dimension: 'GENDER',
      type: 'CATEGORICAL',
      buckets: [
        { key: 'MALE', label: '남성', count: 6, ratio: 0.6 },
        { key: 'FEMALE', label: '여성', count: 3, ratio: 0.3 },
        { key: 'UNKNOWN', label: '미입력', count: 1, ratio: 0.1 },
      ],
    },
  ],
  ...overrides,
});

const renderSection = (scope: 'public' | 'admin' = 'admin') => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatisticsSection clubId={1} scope={scope} />
      </ThemeProvider>
    </QueryClientProvider>,
  );
};

describe('StatisticsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('지원자가 3명 이상이면 집계 항목과 버킷을 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(createStatistics());

    renderSection();

    expect(await screen.findByText('성별')).toBeInTheDocument();
    expect(screen.getByText('남성')).toBeInTheDocument();
    expect(screen.getByText('미입력')).toBeInTheDocument();
  });

  it('일자별 지원 추이는 지원이 없는 날을 포함해 추이 차트로 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(
      createStatistics({
        results: [
          {
            dimension: 'DAILY_APPLICATIONS',
            type: 'TIME_SERIES',
            buckets: [
              { key: '2026-03-02', label: '3월 2일', count: 4 },
              { key: '2026-03-03', label: '3월 3일', count: 0 },
              { key: '2026-03-04', label: '3월 4일', count: 6 },
            ],
          },
        ],
      }),
    );

    renderSection();

    expect(await screen.findByText('일자별 지원 추이')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /총 10명, 하루 최대 6명/ })).toBeInTheDocument();
    expect(screen.getByText('3월 2일')).toBeInTheDocument();
    expect(screen.getByText('3월 4일')).toBeInTheDocument();
  });

  it('공개 통계는 지원자가 3명 미만이면 분포 대신 안내 문구를 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(createStatistics({ totalApplicants: 2 }));

    renderSection('public');

    expect(await screen.findByText(/3명 이상 모이면/)).toBeInTheDocument();
    expect(screen.queryByText('성별')).not.toBeInTheDocument();
  });

  it('관리자 통계는 지원자가 3명 미만이어도 원본 분포를 그대로 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(createStatistics({ totalApplicants: 2 }));

    renderSection('admin');

    expect(await screen.findByText('성별')).toBeInTheDocument();
    expect(screen.getByText('남성')).toBeInTheDocument();
  });

  it('지원자가 없으면 빈 차트 대신 안내 문구를 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(createStatistics({ totalApplicants: 0 }));

    renderSection('admin');

    expect(await screen.findByText('아직 지원자가 없습니다.')).toBeInTheDocument();
    expect(screen.queryByText('성별')).not.toBeInTheDocument();
  });

  it('서버가 masked로 내려주면 안내 문구를 표시한다', async () => {
    mockedFetch.mockResolvedValueOnce(
      createStatistics({ totalApplicants: 2, masked: true, results: [] }),
    );

    renderSection('public');

    expect(await screen.findByText(/3명 이상 모이면/)).toBeInTheDocument();
  });

  it('지원폼이 없어 조회에 실패하면 지원자 화면에는 섹션을 노출하지 않는다', async () => {
    mockedFetch.mockRejectedValueOnce(new Error('지원폼이 존재하지 않습니다'));

    const { container } = renderSection('public');

    await waitFor(() => expect(container).toBeEmptyDOMElement());
  });
});
