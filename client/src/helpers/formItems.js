export const convertToValueLabel = (items, key) => {
  return items.map((item) => {
    return {
      value: item[key],
      label: item.label,
    };
  });
};
