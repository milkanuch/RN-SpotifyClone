export const millisToMinutesAndSeconds = (millis: number): string => {
  const ONE_SECOND_IN_MILLISECONDS = 1000;
  const ONE_MINUTE_IN_MILLISECONDS = 60000;

  const FORMAT_CHANGE_VALUE = 10;

  const minutes = Math.floor(millis / ONE_MINUTE_IN_MILLISECONDS);
  const seconds = (
    (millis % ONE_MINUTE_IN_MILLISECONDS) /
    ONE_SECOND_IN_MILLISECONDS
  ).toFixed(0);

  return (
    minutes + ':' + (Number(seconds) < FORMAT_CHANGE_VALUE ? '0' : '') + seconds
  );
};
