export const getDate = (date) => ({
  monthNumber: date.getMonth(),
  dayPresent: date.getDate(),
  year: date.getFullYear(),
  month: date.toLocaleString('eng', {
    month: 'long',
  }),
});
