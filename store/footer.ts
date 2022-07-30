import { createSlice } from "@reduxjs/toolkit";

interface initialState {
	footerNav: {
		title: string;
		link: string;
	}[];
}

const initialState: initialState = {
	footerNav: [
		{
			title: "Tesla-clone © 2022",
			link: "",
		},
		{
			title: "Github",
			link: "https://github.com/Super-Nat?tab=repositories",
		},
		{
			title: "LinkIn",
			link: "https://www.linkedin.com/in/natchapon-hemathulin-a5420a230/",
		},
		{
			title: "Portfolio",
			link: "",
		},
	],
};

const footerSlice = createSlice({
	name: "footer",
	initialState,
	reducers: {},
});

export default footerSlice;
