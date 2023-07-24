let defaultSolarDateReminder = [
  { label: "新年", value: "01/01" },
  { label: "情人節", value: "02/14" },
  { label: "聖誕節", value: "12/25" },
];

let defaultLunarDateReminder = [
  { label: "春節", value: "01/01" },
  { label: "元宵節", value: "01/15" },
  { label: "端午節", value: "05/05" },
  { label: "中秋節", value: "08/15" },
];

defaultSolarDateReminder = defaultSolarDateReminder.map((item) => ({
  ...item,
  type: "solar",
}));

defaultLunarDateReminder = defaultLunarDateReminder.map((item) => ({
  ...item,
  type: "lunar",
}));

export { defaultSolarDateReminder, defaultLunarDateReminder };
