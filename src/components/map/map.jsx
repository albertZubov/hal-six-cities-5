import React, { PureComponent } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import { propsOffers } from '../../props/props';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const [firstOffer] = this.props.offers;
    const { latitude, longitude, zoom } = firstOffer.city.location;
    const { offers } = this.props;

    // Отрисовка карты
    const locationMap = [latitude, longitude];
    const map = leaflet.map(this.mapRef.current, {
      center: locationMap,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(locationMap, zoom);
    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(map);

    // Отрисовка маркера
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    offers.map((el) => {
      const offerCords = [el.location.latitude, el.location.longitude];
      return leaflet.marker(offerCords, { icon }).addTo(map);
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
};

export default Map;
