// import { getDate } from '../utils/utils';
// const getRandomNumber = (number) => getCountRandom(0, number);

const getRandomBoolean = () => Boolean(Math.round(Math.random()));

export const getCountRandom = (min, max) =>
  Math.floor(getCountRandomDecimal(max, min));

const getCountRandomDecimal = (min, max) =>
  Number((Math.random() * (max - min) + min).toFixed(1));

export const city = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const getRatingPercent = (value) => {
  return value / 0.05;
};

export const getOffer = () => ({
  bedrooms: getCountRandom(1, 4),
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: [
    `Very recommended: comfortable location, incredibly friendly staff, very tasty breakfasts, cleanliness, comfort. A decent hotel! You're great, so keep it! Thanks for the hospitality, be sure to return to you.`,
    `Great hotel. Good location. Everything is clean and cozy. A variety of breakfasts. I thank the hotel staff. I would like to note that everyone is very friendly and polite, so an atmosphere of good rest and excellent mood is created.`,
    `Despite its inexpensive price the hotel is very decent. Always friendly staff, willingly responded to any requests. I was pleased that before breakfast the temperature was measured and gloves and masks were given out. The location of the hotel is very comfortable, in the center you can see everything and close to the station.`,
  ][getCountRandom(0, 2)],
  goods: [
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
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    // is_pro: true,
    name: 'Angelina',
  },
  id: Math.random().toString().split('.')[1],
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
  ][getCountRandom(0, 2)],
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
  location: {
    latitude: +('52.3' + getCountRandom(0, 10) + '14938496678'),
    longitude: +('4.6' + getCountRandom(0, 100) + '877537499948'),
    // zoom: 8,
  },
  adults: getCountRandom(1, 5),
  previewImage: [
    `img/apartment-small-03.jpg`,
    `img/room-small.jpg`,
    `img/apartment-small-04.jpg`,
  ][getCountRandom(0, 2)],
  price: Math.round(getCountRandom(40, 200) / 10) * 10,
  rating: getRatingPercent(getCountRandomDecimal(3, 5)),
  title: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`,
  ][getCountRandom(0, 3)],
  type: [`apartments`, `private room`, `studio`, `loft`][getCountRandom(0, 3)],
  tariff: [`night`, `light`][getCountRandom(0, 1)],
});

export const getComment = () => ({
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: getRatingPercent(getCountRandomDecimal(3, 5)),
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
});
