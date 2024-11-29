import { useAppSelector } from './hooks.ts';
import { OfferItem } from '../../models/app.models.ts';

export const useCitySelector = (): string => {
  return useAppSelector((state) => state.city);
};

export const useOffersSelector = (): OfferItem[] => {
  return useAppSelector((state) => state.offers);
};

export const useOfferListByCitySelector = (city: string): OfferItem[] => {
  const offers = useOffersSelector();

  return offers.filter((offer: OfferItem) => offer.city?.title === city);
};
