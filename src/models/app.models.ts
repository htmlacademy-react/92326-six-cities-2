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
}
