import { useAppSelector } from './hooks.ts';
import { OfferItem } from '../../models/app.models.ts';

export const useCitySelector = (): string => useAppSelector((state) => state.city);

export const useOffersSelector = (): OfferItem[] => useAppSelector((state) => state.offers);

export const useOfferListByCitySelector = (city: string): OfferItem[] => {
  const offers = useOffersSelector();

  return offers.filter((offer: OfferItem) => offer.city?.title === city);
};

export const useActiveOfferSelector = (): OfferItem | null => useAppSelector((state) => state.activeOffer);

export const useActiveSortSelector = (): string => useAppSelector((state) => state.sort);
