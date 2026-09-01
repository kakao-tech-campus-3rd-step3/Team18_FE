import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { theme } from '@/app/styles/theme';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';
import { CHANNEL_REQUIRED_MESSAGE, SentAcceptanceMessagesSection, SMS_NOTICE } from './index';

vi.mock('@/pages/admin/Dashboard/api/sentMessage');
vi.mock('@/shared/utils/toast', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const mockedSentMessage = vi.mocked(sentMessage);

const renderSection = () => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/clubs/7/dashboard']}>
          <Routes>
            <Route
              path='/clubs/:clubId/dashboard'
              element={<SentAcceptanceMessagesSection stage='서류' />}
            />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>,
  );
};

describe('SentAcceptanceMessagesSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedSentMessage.mockResolvedValue(undefined);
  });

  it('기본으로 이메일만 선택되어 있고, 그대로 전송하면 channels에 EMAIL만 담긴다', async () => {
    const user = userEvent.setup();
    renderSection();

    expect(screen.getByLabelText('이메일')).toBeChecked();
    expect(screen.getByLabelText('문자(SMS)')).not.toBeChecked();

    await user.type(screen.getByPlaceholderText(/합격자에게 이 메세지가 전달됩니다/), '안내');
    await user.click(screen.getByRole('button', { name: '결과 전송하기' }));

    await waitFor(() =>
      expect(mockedSentMessage).toHaveBeenCalledWith(
        7,
        { message: '안내', channels: ['EMAIL'] },
        '서류',
        expect.any(String),
      ),
    );
  });

  it('문자를 함께 선택하면 두 채널을 모두 보내고 비용·인원 제한 안내를 보여준다', async () => {
    const user = userEvent.setup();
    renderSection();

    await user.click(screen.getByLabelText('문자(SMS)'));
    expect(screen.getByText(SMS_NOTICE)).toBeInTheDocument();

    await user.type(screen.getByPlaceholderText(/합격자에게 이 메세지가 전달됩니다/), '안내');
    await user.click(screen.getByRole('button', { name: '결과 전송하기' }));

    await waitFor(() => expect(mockedSentMessage).toHaveBeenCalledTimes(1));
    expect(mockedSentMessage.mock.calls[0][1].channels).toEqual(['EMAIL', 'SMS']);
  });

  it('채널을 모두 해제하면 전송하지 않고 검증 메시지를 보여준다', async () => {
    const user = userEvent.setup();
    renderSection();

    await user.type(screen.getByPlaceholderText(/합격자에게 이 메세지가 전달됩니다/), '안내');
    await user.click(screen.getByLabelText('이메일'));
    await user.click(screen.getByRole('button', { name: '결과 전송하기' }));

    expect(await screen.findByText(CHANNEL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(mockedSentMessage).not.toHaveBeenCalled();
  });
});
