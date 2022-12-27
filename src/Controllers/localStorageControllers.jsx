const getLocalStorageData = (identifier) => {
  const temp = JSON.parse(localStorage.getItem(identifier));
  return temp;
};

const setLocalStorageData = (identifier, data) => {
  localStorage.setItem(identifier, JSON.stringify(data));
};

const initLocalStorageForData = (identifier) => {
  localStorage.setItem(identifier, JSON.stringify([]));
};

export { getLocalStorageData, setLocalStorageData, initLocalStorageForData };
