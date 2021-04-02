import React from 'react';
import renderer from 'react-test-renderer';
import { getOffer } from '../../mocks/data';
import { Main } from '../main/main';
import { BrowserRouter } from 'react-router-dom';

const offers = new Array(10).fill('').map(getOffer);
const activeOffer = offers.slice(1, 4);
const userData = {
  email: 'zubov@infonica.ru',
  avatarUrl:
    'https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg',
};

describe('<Main /> render', () => {
  it('testMain', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Main offers={offers} activeOffer={activeOffer} userData={userData} />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
