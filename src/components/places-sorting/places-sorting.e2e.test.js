import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PlacesSorting } from './places-sorting';

configure({ adapter: new Adapter() });

test('sorting offers on the Main page', () => {
  const activeTypeSort = 'POPULAR';
  const handleSortingType = jest.fn();

  const wrapper = mount(
    <PlacesSorting
      activeTypeSort={activeTypeSort}
      sortingType={handleSortingType}
    />
  );

  wrapper.find(`.places__sorting-type`).simulate(`click`);
  wrapper.state('isOpen');
  // expect(mockState).toEqual({ isOpen: true });
});
