import React, { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import { propsOffers } from '../../props/props';
import { connect } from 'react-redux';
import { getActiveCityID } from 'store/selectors';

// Отрисовка маркера
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30],
});

// Отрисовка активного маркера
const iconHover = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30],
});

const Map = ({ offers, activeCityID }) => {
  const [firstOffer] = offers;
  const { latitude, longitude, zoom } = firstOffer.city.location;
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const locationMap = [latitude, longitude];

  useEffect(() => {
    const newMap = leaflet.map(mapRef.current, {
      center: locationMap,
      zoom,
      zoomControl: false,
      marker: true,
    });
    newMap.setView(locationMap, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(newMap);
    setMap(newMap);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    map.eachLayer((layer) => {
      if (layer.options.icon) {
        layer.remove();
      }
    });

    offers.forEach((offer) => {
      const { id } = offer;
      const iconActive = id === activeCityID ? iconHover : icon;
      const offerCords = [offer.location.latitude, offer.location.longitude];
      leaflet
        .marker(offerCords, { icon: iconActive })
        .addTo(map)
        .bindPopup(offer.title);
    });

    map.setView(locationMap, zoom);
  }, [activeCityID, map, offers]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  offersNearby: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  activeCityID: PropTypes.number,
};

const mapStateToProps = (state) => ({
  activeCityID: getActiveCityID(state),
});

export default connect(mapStateToProps)(Map);
