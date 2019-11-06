export const dateStringToDate = (dateString: string): Date => {
  const date = dateString.split('/').reverse().join('/');
  return new Date(date);
};