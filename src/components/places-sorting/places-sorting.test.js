import React from 'react';
import renderer from 'react-test-renderer';
import { PlacesSorting } from './places-sorting';

const activeTypeSort = 'POPULAR';
const handleSortingType = () => {};

test('click on button "Sort by"', () => {
  const tree = renderer
    .create(
      <PlacesSorting
        activeTypeSort={activeTypeSort}
        sortingType={handleSortingType}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
