import { createAction } from '@reduxjs/toolkit';

const Actions = {
  SELECT_CITY: 'SELECT_CITY',
  LOAD_OFFERS: 'LOAD_OFFERS'
};

export const actionSelectCity = createAction(Actions.SELECT_CITY, (city: string) => ({
  payload: city
}));

export const actionLoadOffers = createAction(Actions.LOAD_OFFERS);
