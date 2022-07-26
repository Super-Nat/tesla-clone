import { createSlice } from "@reduxjs/toolkit";

type initialState = {
	isOpen: boolean;
};

const initialState: initialState = {
	isOpen: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
