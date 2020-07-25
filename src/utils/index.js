export const getIcon = () => {};

export const getTotal = (array) => {
  const duplicateArr = [];
  array.forEach((element) => {
    duplicateArr.push(element[1]);
  });
  const duplicateCount = {};
  duplicateArr.forEach(
    (e) => (duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1)
  );
  const result = Object.keys(duplicateCount).map((e) => {
    return { key: e, count: duplicateCount[e] };
  });
  return result;
};

export const filterEmployee = (arr, valueSearch, valueDepartment) => {
  const result = [];

  if (valueDepartment) {
    arr.forEach((element) => {
      if (
        (element[2].toLowerCase().includes(valueSearch) ||
          element[6].toLowerCase().includes(valueSearch)) &&
        element[1].toLowerCase() === valueDepartment.toLowerCase()
      ) {
        result.push(element);
      }
    });
  } else {
    arr.forEach((element) => {
      if (
        element[2].toLowerCase().includes(valueSearch) ||
        element[6].toLowerCase().includes(valueSearch)
      ) {
        result.push(element);
      }
    });
  }

  return result;
};

export const filterDepartment = (arr, valueSearch) => {
  const result = [];
  arr.forEach((element) => {
    if (element[1] === valueSearch) {
      result.push(element);
    }
  });
  return result;
};
