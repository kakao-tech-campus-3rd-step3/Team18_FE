export interface UseApiQueryResult<T> {
  data: T;
  error?: Error | null;
  isLoading: boolean;
  isError?: boolean;
}
