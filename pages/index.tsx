import type { NextPage } from "next";
import { Fragment, useEffect, useRef } from "react";
import { useAppSelector } from "../hooks/typeHook";
import { useScroll } from "framer-motion";

import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";

const Home: NextPage = () => {
	const imageHome = useAppSelector((state) => state.image.home);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });

	useEffect(() => {
		scrollYProgress.onChange((latest) => {
			console.log(latest);

			// latest >=
			// document.getElementById("main")?.offsetHeight - window.innerHeight - 400
			// 	? setIsOpen(true)
			// 	: setIsOpen(false);
		});
	}, [scrollYProgress]);

	return (
		<Fragment>
			<Head>
				<title>Tesla | clone</title>
				<meta
					name="description"
					content="This site created for learning NextJS."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<Header />

			<main role="main" ref={ref}>
				{imageHome.map((image, index) => (
					<Section key={index} imageBg={image} />
				))}
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
