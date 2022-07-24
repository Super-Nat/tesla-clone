import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
	name: "footer",
	initialState: {
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
	},
});

export default footerSlice;
