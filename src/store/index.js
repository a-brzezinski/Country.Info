import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './country-slice';

export const store = configureStore({
	reducer: {
		country: countrySlice.reducer,
	},
});
