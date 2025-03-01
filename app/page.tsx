"use client";

import { useState } from "react";
import EngineDisplacement from "./components/EngineDisplacement";
import EnginePower from "./components/EnginePower";

export default function Home() {
  const [mode, setMode] = useState<string>("engine-cc");
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <select
        name="mode"
        id="mode"
        onChange={(e) => setMode(e.target.value)}
        className="bg-black text-white"
      >
        <option value="engine-cc">Engine Displacement</option>
        <option value="engine-power">Engine Power Converter</option>
      </select>
      {mode === "engine-cc" ? (
        <EngineDisplacement title="Engine Displacement Calculator" />
      ) : (
        <EnginePower title="Engine Power Converter" />
      )}
    </main>
  );
}
