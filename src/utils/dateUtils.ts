export const formatDate = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('ko-KR');
};

export const formatDateWithoutYear = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${month}/${day}`;
};
