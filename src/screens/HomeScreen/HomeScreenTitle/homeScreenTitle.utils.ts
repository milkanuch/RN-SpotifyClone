export const getGreetMessageByTime = () => {
  const currentHour = new Date().getHours();

  return currentHour >= 2 && currentHour < 12
    ? 'Good Morning!'
    : 'Good Afternoon!';
};
