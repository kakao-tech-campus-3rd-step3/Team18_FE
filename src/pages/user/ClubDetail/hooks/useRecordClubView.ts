import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { recordClubView } from '../api/clubView';

export const useRecordClubView = (clubId: number) => {
  const recordedClubIdRef = useRef<number | null>(null);
  const { mutate } = useMutation({ mutationFn: recordClubView });

  useEffect(() => {
    if (!Number.isFinite(clubId) || recordedClubIdRef.current === clubId) return;

    recordedClubIdRef.current = clubId;
    mutate(clubId);
  }, [clubId, mutate]);
};
