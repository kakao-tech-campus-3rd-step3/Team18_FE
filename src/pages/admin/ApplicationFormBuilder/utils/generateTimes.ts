export const generateTimes = () => {
  return Array.from({ length: 24 }, (_, i) => `${i}:00`).slice(7);
};
