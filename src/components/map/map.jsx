import React, { PureComponent } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import { propsOffers } from '../../props/props';

// Отрисовка маркера
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30],
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    const { offers } = this.props;
    const [firstOffer] = offers;

    const { latitude, longitude, zoom } = firstOffer.city.location;

    // Отрисовка карты
    const locationMap = [latitude, longitude];
    this.map = leaflet.map(this.mapRef.current, {
      center: locationMap,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(locationMap, zoom);
    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(this.map);

    offers.map((el) => {
      const offerCords = [el.location.latitude, el.location.longitude];
      return leaflet.marker(offerCords, { icon }).addTo(this.map);
    });
  }

  componentDidUpdate() {
    const { offers } = this.props;
    const [firstOffer] = offers;

    const { latitude, longitude, zoom } = firstOffer.city.location;

    // Отрисовка карты
    const locationMap = [latitude, longitude];

    this.map.eachLayer((layer) => {
      if (layer.options.icon) {
        layer.remove();
      }
    });

    this.map.setView(locationMap, zoom);

    offers.forEach(({ location: { latitude, longitude } }) => {
      leaflet.marker([latitude, longitude], { icon }).addTo(this.map);
    });
  }

  render() {
    return (
      <div ref={this.mapRef} style={{ width: '100%', height: '100%' }}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  offersNearby: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default Map;
