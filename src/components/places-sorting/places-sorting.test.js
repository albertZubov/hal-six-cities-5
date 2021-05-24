import React from 'react';
import renderer from 'react-test-renderer';
import { PlacesSorting } from './places-sorting';

const activeTypeSort = 'POPULAR';
const handleSortingType = () => {};

test('sorting offers on the Main page', () => {
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
