import { createSlice } from "@reduxjs/toolkit";

interface headerNav {
	middleNav: {
		title: string;
		link: string;
	}[];
	lastNav: {
		title: string;
		link: string;
	}[];
	page: {
		title: string;
		desc: string;
		linkTitle: string;
		link: string;
	}[];
}

const initialState: headerNav = {
	middleNav: [
		{ title: "Model 3", link: "" },
		{ title: "Model X", link: "" },
		{ title: "Model S", link: "" },
		{ title: "Model Y", link: "" },
		{ title: "Solar Roof", link: "" },
		{ title: "Solar Panels", link: "" },
	],
	lastNav: [
		{ title: "Shop", link: "" },
		{ title: "Account", link: "" },
	],
	page: [
		{
			title: "Model 3",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
		},
		{
			title: "Model X",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
		},
		{
			title: "Model S",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
		},
		{
			title: "Model Y",
			desc: "Order Online for",
			linkTitle: "Touchless Delivery",
			link: "",
		},
		{
			title: "Solar Panels",
			desc: "Lowest Cost Solar Panels in America",
			linkTitle: "",
			link: "",
		},
		{
			title: "Solar Roof",
			desc: "Produce Clean Energy From Your Roof",
			linkTitle: "",
			link: "",
		},
		{
			title: "Accessories",
			desc: "",
			linkTitle: "",
			link: "",
		},
	],
};

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {},
});

export default headerSlice;
