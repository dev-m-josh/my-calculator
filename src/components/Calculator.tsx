function Calculator() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-80 rounded-2xl bg-slate-800 p-4">
        {/* Display */}
        <div className="mb-4 rounded-lg bg-slate-900 p-4 text-right">
          <span className="text-3xl font-bold text-white">0</span>
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
          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            7
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            8
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            9
          </button>

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            ×
          </button>

          {/* Row 3 */}
          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            4
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            5
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            6
          </button>

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            −
          </button>

          {/* Row 4 */}
          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            1
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            2
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            3
          </button>

          <button className="rounded-lg bg-orange-500 p-4 text-white hover:cursor-pointer">
            +
          </button>

          {/* Row 5 */}
          <button className="col-span-2 rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
            0
          </button>

          <button className="rounded-lg bg-slate-600 p-4 text-white hover:cursor-pointer">
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
