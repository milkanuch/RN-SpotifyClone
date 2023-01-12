import { MORNING_GREETING, NOON_GREETING } from './homeScreenTitle.settings';

export const getGreetingMessageByTime = () => {
  const currentHour = new Date().getHours();

  const TWO_AFTER_MIDNIGHT = 2;
  const NOON = 12;

  return currentHour >= TWO_AFTER_MIDNIGHT && currentHour < NOON
    ? MORNING_GREETING
    : NOON_GREETING;
};
