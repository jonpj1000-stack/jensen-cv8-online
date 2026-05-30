import { useEffect, useState } from "react";
import { C_V8_MODELS, getModelById } from "../data/models";

export default function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState(() => {
    return localStorage.getItem("jensenCv8Model") || "all";
  });

  useEffect(() => {
    localStorage.setItem("jensenCv8Model", selectedModel);
    window.dispatchEvent(new CustomEvent("jensen-cv8-model-change"));
  }, [selectedModel]);

  const model = getModelById(selectedModel);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Which Jensen C-V8 do you own?
      </label>

      <select
        value={selectedModel}
        onChange={(event) => setSelectedModel(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
      >
        {C_V8_MODELS.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
        Showing guidance for{" "}
        <span className="font-semibold text-slate-900">{model.shortName}</span>
        <br />
        <span className="text-xs">{model.engine}</span>
      </div>
    </div>
  );
}