import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PlacesSorting } from './places-sorting';

configure({ adapter: new Adapter() });

test('click on button "Sort by"', () => {
  const activeTypeSort = 'POPULAR';
  const handleSortingType = jest.fn();
  const mockState = {
    isOpen: true,
  };

  const wrapper = mount(
    <PlacesSorting
      activeTypeSort={activeTypeSort}
      sortingType={handleSortingType}
    />
  );

  wrapper.find(`.places__sorting-type`).simulate(`click`);
  expect(mockState).toEqual({ isOpen: true });
});
