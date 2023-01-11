export const getProgressWidth = (currentValue: number, limitValue: number) => {
  return {
    width: `${(currentValue / limitValue) * 100}%`,
  };
};
