export const generateTimes = () => {
  return Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${period}`;
  });
};
