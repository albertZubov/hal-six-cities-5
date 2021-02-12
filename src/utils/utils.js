export const getDate = (dateTime) => {
  const arrDate = dateTime.split('T');
  const date = arrDate[0].split('-');
  const time = arrDate[1].split(':');

  return {
    fullDate: arrDate[0],
    year: date[0],
    monthNumber: date[1],
    month: new Date(arrDate[0]).toLocaleString('eng', {
      month: 'long',
    }),
    dayPresent: date[2],
    hours: time[0],
    minutes: time[1],
    seconds: time[2].slice(0, -1),
  };
};

export const extend = (a, b) => Object.assign({}, a, b);

export const createArrElements = (count, data) =>
  new Array(count).fill(``).map(data);

export const sortArrOnCities = (arr) =>
  arr.reduce((accumulator, currentValue) => {
    const { city } = currentValue;
    accumulator[city.name] = accumulator[city.name]
      ? [...accumulator[city.name], currentValue]
      : [currentValue];
    return accumulator;
  }, {});
