import { getNames } from './getNames.js';

export const getMessage = birthdays => {
  const names = getNames(birthdays);

  if (names) return `Happy Birthday to ${names}! 🎉`;

  return 'No birthdays today 😔';
};
