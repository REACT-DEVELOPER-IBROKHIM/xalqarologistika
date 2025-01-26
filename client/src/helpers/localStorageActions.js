export const setDataToLocalStorage = (key, data) => {
  if (data !== null && typeof data === "object") {
    data = JSON.stringify(data);
  }
  localStorage.setItem(key, data);
};

export const getDataFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (data?.includes("{") || data?.includes("[")) {
      return JSON.parse(data);
    }
    return data;
  } catch (err) {
    console.error("Error reading from localStorage", err);
    return null;
  }
};

export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
