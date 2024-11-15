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
