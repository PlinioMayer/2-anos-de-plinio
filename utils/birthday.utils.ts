export const isBeforeBirthday = (): boolean => {
  const date = new Date();

  if (
    date.getFullYear() < 2025 ||
    (date.getFullYear() === 2025 && date.getMonth() === 0 && date.getDate() < 6)
  ) {
    return true;
  }

  return false;
};
