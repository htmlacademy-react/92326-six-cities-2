import { City, OfferItem } from '../../../models/app.models.ts';
import { useEffect } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../contants.ts';
import { Icon, layerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/map.tsx';
import styles from './map.module.scss';
import 'leaflet/dist/leaflet.css';


interface MapProps {
  offerList: OfferItem[];
  city: City;
  activeOffer: OfferItem | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({offerList, city, activeOffer}: MapProps) {
  const [map, mapRef] = useMap(city);

  useEffect(() => {
    if (map) {
      const markerGroup = layerGroup().addTo(map);

      offerList.forEach((offer: OfferItem) => {
        const marker = new Marker({
          lat: offer.coords.lat,
          lng: offer.coords.lng
        });

        marker.setIcon(
          activeOffer && activeOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon
        ).addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }

  }, [map, offerList, activeOffer]);

  return (
    <div className={styles.map} ref={mapRef}></div>
  );
}
