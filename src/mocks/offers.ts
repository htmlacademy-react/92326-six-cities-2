import { OfferItem, OfferTypes } from '../models/app.models.ts';

export const OFFERS: OfferItem[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    preview: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: true,
    type: OfferTypes.Apartment,
    rating: 4,
    price: 320,
    coords: {
      lat: 52.3809553943508,
      lng: 4.939309666406198
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
    price: 20,
    coords: {
      lat: 52.3909553943508,
      lng: 4.85309666406198
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
    coords: {
      lat: 52.3909553943508,
      lng: 4.929309666406198
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
    price: 180,
    coords: {
      lat: 52.3609553943508,
      lng: 4.85309666406198
    }
  }
];
