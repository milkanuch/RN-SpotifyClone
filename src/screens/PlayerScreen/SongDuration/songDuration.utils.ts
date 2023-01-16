const formatDate = (date: string | number): string => {
  const FORMAT_CHANGE_VALUE = 10;

  return (Number(date) < FORMAT_CHANGE_VALUE ? '0' : '') + date;
};

export const convertSecondsToMinutesAndSeconds = (seconds: number): string => {
  const ONE_MINUTE_IN_SECONDS = 60;

  const minutes = Math.floor(seconds / ONE_MINUTE_IN_SECONDS);
  const remainingSeconds = (seconds % ONE_MINUTE_IN_SECONDS).toFixed(0);

  return formatDate(minutes) + ':' + formatDate(remainingSeconds);
};
