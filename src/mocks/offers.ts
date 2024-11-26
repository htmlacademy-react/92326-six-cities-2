import { OfferItem, OfferTypes } from '../models/app.models.ts';
import { CITY_LIST } from './map-data.ts';

export const OFFERS: OfferItem[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    preview: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    type: OfferTypes.Apartment,
    rating: 4,
    city: CITY_LIST[1],
    price: 320,
    coords: {
      lat: 48.864716,
      lng: 2.359014
    }
  },
  {
    id: 2,
    title: 'Wood and stone place',
    preview: 'img/room.jpg',
    isPremium: false,
    isFavorite: false,
    type: OfferTypes.PrivateRoom,
    rating: 2,
    city: CITY_LIST[1],
    price: 20,
    coords: {
      lat: 48.874716,
      lng: 2.359014
    }
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    preview: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: true,
    type: OfferTypes.Apartment,
    rating: 3,
    price: 120,
    city: CITY_LIST[1],
    coords: {
      lat: 48.824716,
      lng: 2.359014
    }
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    preview: 'img/apartment-03.jpg',
    isPremium: false,
    isFavorite: false,
    type: OfferTypes.Apartment,
    rating: 1,
    city: CITY_LIST[1],
    price: 180,
    coords: {
      lat: 48.864716,
      lng: 2.337014
    }
  }
];
