import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import Content from "./Content";

interface props {
	imageBg: {
		desktopLHD: string;
		mobileLHD: string;
	};
	page: {
		title: string;
		desc: string;
		link: string;
		linkTitle: string;
		btn1: string;
		btn2: string;
	};
}
const Section: React.FC<props> = (props) => {
	const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });
	const sectionVariants: Variants = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
		},
	};
	return (
		<motion.section
			className="section--full"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: false, amount: 0.7 }}
		>
			<picture>
				<source srcSet={props.imageBg?.mobileLHD} media="(max-width: 599px)" />
				<source srcSet={props.imageBg?.desktopLHD} media="(min-width: 600px)" />
				<source
					srcSet={props.imageBg?.desktopLHD}
					media="(min-width: 600px) and (orientation:portrait)"
				/>
				<img src={props.imageBg?.desktopLHD} alt="Flowers" />
			</picture>
			<motion.div variants={sectionVariants}>
				<Content title={props.page} />
			</motion.div>
		</motion.section>
	);
};
export default Section;
