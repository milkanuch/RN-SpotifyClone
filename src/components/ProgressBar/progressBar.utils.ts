import { PERCENTAGE } from 'constants/scale';

export const getProgressWidth = (currentValue: number, limitValue: number) => {
  return {
    width: `${(currentValue / limitValue) * PERCENTAGE}%`,
  };
};
