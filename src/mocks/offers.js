// const getRandomNumber = (number) => getCountRandom(0, number);
const getRandomBoolean = () => Boolean(Math.round(Math.random()));

const getCountRandom = (min, max) =>
  Math.floor(getCountRandomDecimal(max, min));

const getCountRandomDecimal = (min, max) =>
  Number((Math.random() * (max - min) + min).toFixed(1));

export default {
  isPremium: getRandomBoolean(),
  name: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`,
  ][getCountRandom(0, 3)],
  rating: getCountRandomDecimal(2, 5),
  classRoom: [`apartments`, `private room`, `studio`, `loft`][
    getCountRandom(0, 3)
  ],
  bedrooms: getCountRandom(1, 4),
  adults: getCountRandom(1, 5),
  price: Math.round(getCountRandom(40, 200) / 10) * 10,
  tariff: [`night`, `light`][getCountRandom(0, 1)],
  conveniences: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ].slice(getCountRandom(0, 4), getCountRandom(4, 9)),
};
