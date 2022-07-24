import { configureStore } from "@reduxjs/toolkit";
import header from "./header";
import footer from "./footer";

const store = configureStore({
	reducer: { header: header.reducer, footer: footer.reducer },
});

export default store;
