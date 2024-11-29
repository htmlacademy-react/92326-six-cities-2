import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../../mocks/offers.ts';
import { actionLoadOffers, actionSelectCity, actionSetActiveOffer, actionSetSort } from './actions.ts';
import { OfferItem } from '../../models/app.models.ts';
import { SortTypes } from '../app.contants.tsx';

interface InitState {
  city: string;
  offers: OfferItem[];
  activeOffer: OfferItem | null;
  sort: string;
}

const INITIAL_CITY = 'Paris';
const INITIAL_SORT = SortTypes.POPULAR;

const initialState: InitState = {
  city: INITIAL_CITY,
  offers: OFFERS,
  activeOffer: null,
  sort: INITIAL_SORT
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSelectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(actionSetActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(actionSetSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(actionLoadOffers, (state) => {
      state.offers = OFFERS;
    });
});
