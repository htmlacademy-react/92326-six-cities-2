import { store } from '../app/store/store.ts';

export enum OfferTypes {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

export interface OfferItem {
  id: number;
  title: string;
  preview: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
  price: number;
  coords: OfferItemCoords;
  city?: City;
}

interface OfferItemCoords {
  lat: number;
  lng: number;
}

export interface City {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export interface ReviewItem {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
