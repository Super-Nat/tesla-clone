import { configureStore } from "@reduxjs/toolkit";
import header from "./header";
import footer from "./footer";
import image from "./image";
import menu from "./menu";

const store = configureStore({
	reducer: {
		header: header.reducer,
		footer: footer.reducer,
		image: image.reducer,
		menu: menu,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
