export const generateTimes = () => {
  return Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00:00`).slice(7);
};
