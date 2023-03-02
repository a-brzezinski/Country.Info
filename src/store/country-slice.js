import { createSlice } from '@reduxjs/toolkit';

const initialState = { country: '' };

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		getCountryName(state, action) {
			state.country = action.payload;
		},
	},
});

export const countryActions = countrySlice.actions;

export default countrySlice;
