import { createAction } from '@reduxjs/toolkit';
import { OfferItem } from '../../models/app.models.ts';

const Actions = {
  SELECT_CITY: 'SELECT_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_ACTIVE_OFFER: 'SET_ACTIVE_OFFER'
};

export const actionSelectCity = createAction(Actions.SELECT_CITY,
  (city: string) => (
    {
      payload: city
    }
  )
);

export const actionLoadOffers = createAction(Actions.LOAD_OFFERS);

export const actionSetActiveOffer = createAction(Actions.SET_ACTIVE_OFFER,
  (offer: OfferItem | null) => (
    {
      payload: offer
    }
  )
);
