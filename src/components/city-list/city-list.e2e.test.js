import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CityList } from '../city-list/city-list';

configure({ adapter: new Adapter() });

test('click on button "change city"', () => {
  const activeCity = `Amsterdam`;
  const handleChangeCity = jest.fn();
  const wrapper = mount(
    <CityList activeCity={activeCity} changeCity={handleChangeCity} />
  );

  wrapper
    .find(`.locations__list`)
    .simulate(`click`, { target: { tagName: 'SPAN' } });
  expect(handleChangeCity).toHaveBeenCalledTimes(1);
});
