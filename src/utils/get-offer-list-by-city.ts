import { OfferItem } from '../models/app.models.ts';

export const getOfferListByCity = (city: string, offers: OfferItem[]): OfferItem[] => offers.filter((offer) => offer.city?.title === city);
