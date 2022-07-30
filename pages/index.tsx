import type { NextPage } from "next";
import { Fragment, useRef, useState } from "react";
import { useAppSelector } from "../hooks/typeHook";

import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";

const Home: NextPage = () => {
	const imageHome = useAppSelector((state) => state.image.home);
	const title = useAppSelector((state) => state.header.middleNav);
	const scrollContainer = useRef(null);
	const [isBottom, setIsBottom] = useState(false);

	const onScroll = () => {
		const { scrollTop, scrollHeight, clientHeight }: any =
			scrollContainer.current;

		if (scrollTop >= scrollHeight - clientHeight - 300) {
			setIsBottom(true);
		} else {
			setIsBottom(false);
		}
	};

	return (
		<Fragment>
			<Head>
				<title>Tesla | clone</title>
				<meta
					name="description"
					content="This site created for learning NextJS."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<Header />

			<main role="main" ref={scrollContainer} onScroll={onScroll}>
				{imageHome.map((image, index) => (
					<Section key={index} imageBg={image} title={title[index]?.title} />
				))}
			</main>

			<Footer touchBottom={isBottom} />
		</Fragment>
	);
};

export default Home;
