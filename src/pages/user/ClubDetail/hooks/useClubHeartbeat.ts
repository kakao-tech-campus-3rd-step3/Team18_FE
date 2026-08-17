import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { sendClubHeartbeat } from '../api/clubHeartbeat';

const HEARTBEAT_INTERVAL = 30_000;

export const useClubHeartbeat = (clubId: number) => {
  const { mutate } = useMutation({ mutationFn: sendClubHeartbeat });

  useEffect(() => {
    if (!Number.isFinite(clubId)) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const stop = () => {
      if (intervalId === undefined) return;

      clearInterval(intervalId);
      intervalId = undefined;
    };

    const start = () => {
      stop();
      intervalId = setInterval(() => mutate(clubId), HEARTBEAT_INTERVAL);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        stop();
        return;
      }

      mutate(clubId);
      start();
    };

    if (document.visibilityState === 'visible') start();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [clubId, mutate]);
};
