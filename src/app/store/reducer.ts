import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../../mocks/offers.ts';
import { actionLoadOffers, actionSelectCity } from './actions.ts';

const INITIAL_CITY = 'Paris';
const initialState = {
  city: INITIAL_CITY,
  offers: OFFERS
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSelectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(actionLoadOffers, (state) => {
      state.offers = OFFERS;
    });
});
