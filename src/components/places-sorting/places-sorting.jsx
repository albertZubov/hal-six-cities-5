import React, { PureComponent } from 'react';
import cl from 'classnames';
import { connect } from 'react-redux';
import { ActionCreator, ActionType } from '../store/action';

const btnSort = {
  POPULAR: 'popular',
  LOW_HIGH: 'lowHigh',
  HIGH_LOW: 'highLow',
  RATED_FIRST: 'ratedFirst',
};
class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  sort(name) {
    // console.log(name);
    // switch (dataset.name) {
    //   // case btnSort.POPULAR:
    //   //   offers = offersPopular;
    //   //   break;
    //   case btnSort.LOW_HIGH:
    //     // offers.sort((prev, next) => prev.price - next.price);
    //     break;
    //   case btnSort.HIGH_LOW:
    //     // offers.sort((prev, next) => next.price - prev.price);
    //     break;
    //   // case btnSort.RATED_FIRST:
    //   //   console.log(dataset.name);
    //   //   break;
    // }
  }

  render() {
    const { sortingType } = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={() => {
            this.setState({
              isOpen: !this.state.isOpen,
            });
          }}
        >
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={cl('places__options places__options--custom', {
            'places__options--opened': this.state.isOpen,
            'places__options--closed': !this.state.isOpen,
          })}
          onClick={({ target }) => {
            sortingType(target.dataset.name);

            // this.sort(activeTypeSort);
          }}
          // onClick={({ target }) => this.sort(target)}
        >
          <li
            className="places__option places__option--active"
            tabIndex="0"
            data-name="popular"
          >
            Popular
          </li>
          <li className="places__option" tabIndex="0" data-name="lowHigh">
            Price: low to high
          </li>
          <li className="places__option" tabIndex="0" data-name="highLow">
            Price: high to low
          </li>
          <li className="places__option" tabIndex="0" data-name="ratedFirst">
            Top rated first
          </li>
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTypeSort: state.activeTypeSort,
  // activeSortOffer: state.activeSortOffer,
});
const mapDispatchToProps = (dispatch) => ({
  sortingType: (payload) => dispatch(ActionCreator.sortingType(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
