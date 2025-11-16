export const debounce = <T extends unknown[]>(func: (...args: T) => void, waitFor: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: T): void => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, waitFor);
  };
};
