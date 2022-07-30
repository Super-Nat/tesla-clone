import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";

import { useAppSelector } from "../hooks/typeHook";

const Home: NextPage = () => {
	const imageHome = useAppSelector((state) => state.image.home);
	const page = useAppSelector((state) => state.page.page);
	const [isBottom, setIsBottom] = useState(false);

	return (
		<>
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

			<main role="main">
				{imageHome.map((image, index) => (
					<Section key={index} imageBg={image} page={page[index]} />
				))}
			</main>

			<Footer touchBottom={isBottom} />
		</>
	);
};

export default Home;
