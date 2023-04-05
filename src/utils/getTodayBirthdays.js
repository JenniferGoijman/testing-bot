export const getTodayBirthdays = employees => {
  const today = new Date();

  return employees.filter(employee => {
    const birthdayDate = new Date(employee.birthday);

    return birthdayDate.getMonth() === today.getMonth() && birthdayDate.getDate() === today.getDate();
  });
};
