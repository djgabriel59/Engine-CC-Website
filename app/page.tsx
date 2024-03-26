"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bore, setBore] = useState("");
  const [stroke, setStroke] = useState("");
  const [cc, setCc] = useState(0.0);

  const calculateDisplacement = (e: any) => {
    e.preventDefault();
    if (!parseFloat(bore) || !parseFloat(stroke)) {
      window.alert("You suck...");
      setCc(0.0);
      return;
    }
    const res: any =
      ((parseFloat(bore) / 10) *
        (parseFloat(bore) / 10) *
        (parseFloat(stroke) / 10) *
        Math.PI) /
      4.0;
    setCc(parseInt(res));
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl p-10 font-bold text-gray-900 dark:text-white">
        Engine Displacement Calculator
      </h1>
      <form className="max-w-md mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Bore(mm)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setBore(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Stroke(mm)
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setStroke(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => calculateDisplacement(e)}
        >
          Calculate
        </button>
        <div className="pt-5 text-gray-900 dark:text-white font-bold">
          Result: {cc}cc
        </div>
      </form>
    </main>
  );
}
