import Transaction from '../interfaces/transaction';

const parseTransactions = (data: any): Transaction[] => {
  const arr = data.map((obj: any) => {
    return {
      id: obj.id,
      amount: obj.amount,
      description: obj.description,
      date: new Date(obj.date),
    };
  });

  arr.sort(
    (a: Transaction, b: Transaction) => a.date.getTime() - b.date.getTime()
  );

  return arr;
};

const calculateCumulativeBalance = (transactions: Transaction[]): number => {
  return transactions
    .map((obj) => obj.amount)
    .reduce((prev, curr) => prev + curr, 0);
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dateToDayString = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

const monthToMonthYearString = (month: string): string => {
  const parts = month.split('-');
  return `${months[parseInt(parts[1])]} ${parts[0]}`;
};

const nextDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setTime(newDate.getTime() + 1 * 24 * 60 * 60 * 1000);
  return newDate;
};

const generateDic = (arr: Transaction[]): { [key: string]: number } => {
  const dic: { [key: string]: number } = {};

  for (let obj of arr) {
    const key = dateToDayString(obj.date);
    dic[key] = dic[key] ? dic[key] + obj.amount : obj.amount;
  }

  return dic;
};

interface DayAmount {
  day: string;
  amount: number;
}

const generateAllDays = (
  startDate: Date,
  endDate: Date,
  dic: { [key: string]: number }
): DayAmount[] => {
  var currentDate = startDate;
  const data: DayAmount[] = [];

  while (currentDate <= endDate) {
    const dayStr = dateToDayString(currentDate);

    var amount = data.length > 0 ? data[data.length - 1].amount : 0;
    if (dayStr in dic) {
      amount += dic[dayStr];
    }

    const obj = { day: dayStr, amount: amount };
    data.push(obj);

    currentDate = nextDay(currentDate);
  }

  return data;
};

const groupByMonth = (data: DayAmount[]) => {
  const dataByMonth: { [key: string]: DayAmount[] } = {};

  for (let obj of data) {
    const month = obj.day.split('-').slice(0, 2).join('-');
    dataByMonth[month] = dataByMonth[month]
      ? [...dataByMonth[month], obj]
      : [obj];
  }

  return dataByMonth;
};

const calculateAvarage = (days: DayAmount[]): number => {
  const total = days
    .map((obj) => obj.amount)
    .reduce((prev, curr) => prev + curr, 0);
  const count = days.length;

  return total / count;
};

const calculateMAB = (arr: Transaction[]) => {
  if (arr.length <= 0) return [];

  const dic = generateDic(arr);
  const data = generateAllDays(arr[0].date, arr[arr.length - 1].date, dic);
  const dataByMonth = groupByMonth(data);

  const result = [];

  for (let month in dataByMonth) {
    const avarage = calculateAvarage(dataByMonth[month]);
    result.push({
      month: monthToMonthYearString(month),
      avarage: avarage,
    });
  }

  return result;
};

export { parseTransactions, calculateCumulativeBalance, calculateMAB };
