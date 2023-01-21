import dayjs from "dayjs";

export function generateDatesFromYearBegining() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let comparedate = firstDayOfTheYear;

  while (comparedate.isBefore(today)) {
    dates.push(comparedate.toDate());
    comparedate = comparedate.add(1, "day");
  }

  return dates
}
