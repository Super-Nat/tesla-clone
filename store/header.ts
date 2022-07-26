import { createSlice } from "@reduxjs/toolkit";

type headerNav = {
	middleNav: {
		title: string;
		link: string;
	}[];
	lastNav: {
		title: string;
		link: string;
	}[];
};

const initialState: headerNav = {
	middleNav: [
		{ title: "Model S", link: "" },
		{ title: "Model X", link: "" },
		{ title: "Model 3", link: "" },
		{ title: "Model Y", link: "" },
		{ title: "Solar Roof", link: "" },
		{ title: "Solar Panels", link: "" },
	],
	lastNav: [
		{ title: "Shop", link: "" },
		{ title: "Account", link: "" },
	],
};

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {},
});

export default headerSlice;
