export const getNames = birthdays => {
  const names = birthdays.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return names.join(', ');
};
