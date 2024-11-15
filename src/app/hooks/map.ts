import { LegacyRef, useEffect, useRef, useState } from 'react';
import { City } from '../../models/app.models.ts';
import { Map, TileLayer } from 'leaflet';

export default function useMap(city: City): [Map | null, LegacyRef<HTMLDivElement> | undefined] {
  const mapRef: LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return [map, mapRef];
}
