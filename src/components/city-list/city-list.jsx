import React, { PureComponent } from 'react';
import cl from 'classnames';
import { city } from '../../mocks/data';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <ul
        className="locations__list tabs__list"
        onClick={({ target }) => {
          changeCity(target.textContent);
        }}
      >
        {city.map((el, id) => {
          return (
            <li className="locations__item" key={id}>
              <a
                className={cl('locations__item-link tabs__item', {
                  'tabs__item--active': el === activeCity,
                })}
                href="#"
                onClick={() => loadingPlacesList(arrOffers[id])}
              >
                <span>{el}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CityList;
