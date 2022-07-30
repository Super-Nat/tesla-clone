import "../styles/main.scss";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
