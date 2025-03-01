import { useState } from "react";

export default function EnginePower({ title }: { title: string }) {
  const [hp, setHp] = useState(0);
  const [kw, setKw] = useState(0);
  const [active, setActive] = useState(true);

  const calculatePower = (e: any) => {
    e.preventDefault();
    if (active) {
      setKw(parseFloat((hp * 0.7457).toPrecision(3)));
    } else {
      setHp(parseFloat((kw * 1.341).toPrecision(3)));
    }
  };
  return (
    <div>
      <h1 className="text-2xl p-10 font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <form className="max-w-md mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {active ? "Horsepower" : "Kilowatts"}
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              active
                ? setHp(parseFloat(e.target.value))
                : setKw(parseFloat(e.target.value));
            }}
            value={active ? hp : kw}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {active ? "Kilowatts" : "Horsepower"}
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:text-gray-500 disabled:shadow-none disabled:bg-gray-800/20 cursor-not-allowed"
            onChange={(e) =>
              active
                ? setKw(parseFloat(e.target.value))
                : setHp(parseFloat(e.target.value))
            }
            value={active ? kw : hp}
            required
            disabled
          />
        </div>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={(e) => {
            e.preventDefault();
            setActive((a) => !a);
            setHp(0);
            setKw(0);
          }}
        >
          Swap
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            calculatePower(e);
          }}
        >
          Convert
        </button>
      </form>
    </div>
  );
}
