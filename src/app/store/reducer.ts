import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../../mocks/offers.ts';
import { actionLoadOffers, actionSelectCity, actionSetActiveOffer } from './actions.ts';
import { OfferItem } from '../../models/app.models.ts';

interface InitState {
  city: string;
  offers: OfferItem[];
  activeOffer: OfferItem | null;
}

const INITIAL_CITY = 'Paris';
const initialState: InitState = {
  city: INITIAL_CITY,
  offers: OFFERS,
  activeOffer: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSelectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(actionSetActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(actionLoadOffers, (state) => {
      state.offers = OFFERS;
    });
});
