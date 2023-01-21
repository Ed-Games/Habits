const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

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
        <div className="w-10 h-10  bg-zinc-900  border-2 border-zinc-800 rounded-lg"></div>
      </div>
    </div>
  );
}
