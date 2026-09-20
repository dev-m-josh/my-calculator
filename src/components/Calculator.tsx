import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const numbers = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
  ];

  const handleButtonClick = (value: string) => {
    setDisplay((prevDisplay) => {
      if (prevDisplay === "0") {
        return value;
      }

      if (prevDisplay.length >= 20) {
        return prevDisplay;
      }

      return prevDisplay + value;
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="mx-4 max-w-sm w-96 rounded-2xl bg-slate-800 p-4">
        {/* Display */}
      <div className="mb-4 overflow-hidden rounded-lg bg-slate-900 p-4 text-right">
        <span className="block break-all text-3xl font-bold text-white">
          {display}
        </span>
      </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            C
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            ⌫
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            %
          </button>

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            ÷
          </button>

          {/* Row 2 */}
          {numbers.slice(0, 3).map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer"
            >
              {number}
            </button>
          ))}

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            ×
          </button>

          {/* Row 3 */}
          {numbers.slice(3, 6).map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer"
            >
              {number}
            </button>
          ))}

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            −
          </button>

          {/* Row 4 */}
          {numbers.slice(6, 9).map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer"
            >
              {number}
            </button>
          ))}

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            +
          </button>

          {/* Row 5 */}
          <button
            onClick={() => handleButtonClick("0")}
            className="col-span-2 rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer"
          >
            0
          </button>

          <button
            onClick={() => handleButtonClick(".")}
            className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer"
          >
            .
          </button>

          <button className="rounded-lg bg-green-500 p-4 text-white hover:cursor-pointer">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

