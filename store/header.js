import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
	name: "header",
	initialState: {
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
			{ title: "Menu", link: "" },
		],
	},
});

export default headerSlice;
