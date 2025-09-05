import { getClubs } from '@/pages/main/api/club';
import { useEffect, useState } from 'react';
import type { Club } from '@/pages/main/type/club';

export const useClub = () => {
  const [clubs, setClubs] = useState<Club[]>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getClubs();
        setClubs(response.clubs);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { clubs, isLoading, error };
};
