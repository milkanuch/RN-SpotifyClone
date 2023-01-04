import { MORNING_GREETING, NOON_GREETING } from './homeScreenTitle.settings';

export const getGreetingMessageByTime = () => {
  const currentHour = new Date().getHours();

  return currentHour >= 2 && currentHour < 12
    ? MORNING_GREETING
    : NOON_GREETING;
};
