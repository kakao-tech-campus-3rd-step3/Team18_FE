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

export const formatDateTime = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const dayOfWeek = dayNames[dateObj.getDay()];
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');

  return `${month}/${day}(${dayOfWeek}) ${hours}:${minutes}`;
};
