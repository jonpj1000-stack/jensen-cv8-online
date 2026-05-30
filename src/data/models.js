export const C_V8_MODELS = [
  {
    id: "all",
    name: "All C-V8 Models",
    shortName: "All Models",
    engine: "General C-V8 guidance",
  },
  {
    id: "mk1",
    name: "Jensen C-V8 Mk I",
    shortName: "Mk I",
    engine: "361 cu in Chrysler V8",
  },
  {
    id: "mk2",
    name: "Jensen C-V8 Mk II",
    shortName: "Mk II",
    engine: "361 cu in Chrysler V8",
  },
  {
    id: "mk3",
    name: "Jensen C-V8 Mk III",
    shortName: "Mk III",
    engine: "383 cu in Chrysler V8",
  },
];

export function getModelById(id) {
  return C_V8_MODELS.find((model) => model.id === id) || C_V8_MODELS[0];
}