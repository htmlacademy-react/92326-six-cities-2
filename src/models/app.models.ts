export interface Settings {
  placesToStayCount: number;
}

export enum OfferTypes {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

export interface Offer {
  id: number;
  title: string;
  preview: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
  price: number;
}
