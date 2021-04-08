import React from 'react';
import renderer from 'react-test-renderer';
import { CityList } from '../city-list/city-list';

const activeCity = 'Amsterdam';
const handleChangeCity = () => 'Brussel';

test('click on button "change city"', () => {
  const tree = renderer
    .create(<CityList activeCity={activeCity} changeCity={handleChangeCity} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
