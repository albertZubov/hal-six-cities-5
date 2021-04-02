// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { getOffer } from '../../mocks/data';
// import Main from '../main/main';

// configure({ adapter: new Adapter() });

// const offers = new Array(10).fill('').map(getOffer);
// const activeOffer = offers.slice(1, 4);
// const userData = {
//   email: 'zubov@infonica.ru',
//   avatarUrl:
//     'https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg',
// };

// describe('<Main /> render', () => {
//   it('testMain', () => {
//     const tree = renderer
//       .create(
//         <Main offers={offers} activeOffer={activeOffer} userData={userData} />
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
