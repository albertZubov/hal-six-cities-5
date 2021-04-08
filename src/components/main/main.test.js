import React from 'react';
import renderer from 'react-test-renderer';
import { getOffer } from '../../mocks/data';
import { Main } from '../main/main';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock('../map/map.jsx', () => 'Map');

const middlewares = [];
const mockStore = configureStore(middlewares);

const offers = new Array(10).fill('').map(getOffer);
const activeOffer = offers.slice(1, 4);
const userData = {
  email: 'zubov@infonica.ru',
  avatarUrl:
    'https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg',
};

const initialState = {
  PROCESS: {
    activeCity: `Amsterdam`,
  },
};
const store = mockStore(initialState);

describe('<Main /> render', () => {
  it('testMain', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Main
              offers={offers}
              activeOffer={activeOffer}
              userData={userData}
            />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
