import { generateDatesFromYearBegining } from "../../utils/generate-dates-from-year-beginning";
import { HabitDay } from "../HabitDay";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
const sumaryDates = generateDatesFromYearBegining();

const minimumSumaryDatesSize = 18 * 7; // 18 weeka
const amountOfdaysToFill = minimumSumaryDatesSize - sumaryDates.length;

export function SumaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekdays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {sumaryDates.map((date) => (
          <HabitDay key={date.toString()} />
        ))}

        {amountOfdaysToFill > 0 &&
          Array.from({ length: amountOfdaysToFill }).map((item, index) => (
            <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
          ))}
      </div>
    </div>
  );
}
