import { Day, Days } from "../types";

const current = new Date();
const date = current.getUTCDate();
const month = current.getUTCMonth();
const year = current.getUTCFullYear();

/**
 * Количество дней в текущем месяце
 */
const getDaysNumber = () => {
  const curr = new Date(year, month + 1, 0);

  return curr.getDate();
};

export const createData = () => {
  const data = [] as Days;

  const days = getDaysNumber();

  for (let i = 0; i < days; i++) {
    const day = new Date(year, month, i + 2).getUTCDate();

    if (day < date) {
      data.push({
        day: day,
        status: "missed",
      });
    }

    if (day === date) {
      data.push({
        day: day,
        status: "pending",
      });
    }

    if (day > date) {
      data.push({
        day: day,
        status: "not available yet",
      });
    }
  }

  return data;
};
