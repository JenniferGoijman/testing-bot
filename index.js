import { employees } from './data/employees.js';
import { sendMessage } from './src/sendMessage.js';
import { getTodayBirthdays } from './src/utils/getTodayBirthdays.js';

const todayBirthdays = getTodayBirthdays(employees);

sendMessage(todayBirthdays);
