import { createSlice } from "@reduxjs/toolkit";

interface pageInfo {
	page: {
		title: string;
		desc: string;
		linkTitle: string;
		link: string;
		btn1: string;
		btn2: string;
	}[];
}

const initialState: pageInfo = {
	page: [
		{
			title: "Model 3",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
			btn1: "Custom Order",
			btn2: "Existing Inventory",
		},
		{
			title: "Model X",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
			btn1: "Custom Order",
			btn2: "Existing Inventory",
		},
		{
			title: "Model S",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
			btn1: "Custom Order",
			btn2: "Existing Inventory",
		},
		{
			title: "Model Y",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
			btn1: "Custom Order",
			btn2: "Existing Inventory",
		},
		{
			title: "Solar Panels",
			desc: "Lowest Cost Solar Panels in America",
			linkTitle: "",
			link: "",
			btn1: "Order Now",
			btn2: "Learn More",
		},
		{
			title: "Solar Roof",
			desc: "Produce Clean Energy From Your Roof",
			linkTitle: "",
			link: "",
			btn1: "Order Now",
			btn2: "Learn More",
		},
		{
			title: "Accessories",
			desc: "",
			linkTitle: "",
			link: "",
			btn1: "Shop Now",
			btn2: "",
		},
	],
};

const pageSlice = createSlice({
	name: "page",
	initialState,
	reducers: {},
});

export default pageSlice.reducer;
