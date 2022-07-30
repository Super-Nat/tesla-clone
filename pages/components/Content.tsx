import { motion, useTransform, useViewportScroll } from "framer-motion";
import Link from "next/link";

interface props {
	title: {
		title: string;
		desc: string;
		link: string;
		linkTitle: string;
		btn1: string;
		btn2: string;
	};
}

const Content = (props: props) => {
	return (
		<motion.div className="content">
			<div className="content__wrapper">
				<div>
					<motion.h1
						initial={{ y: 40, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								type: "tween",
								duration: 0.5,
								ease: "easeInOut",
							},
						}}
					>
						{props.title.title}
					</motion.h1>
					{props.title.desc && (
						<motion.p
							initial={{ y: 40, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									type: "tween",
									duration: 0.5,
									delay: 0.7,
									ease: "easeInOut",
								},
							}}
						>
							{props.title.desc}{" "}
							<Link href={props.title.link}>
								<a>{props.title.linkTitle}</a>
							</Link>
						</motion.p>
					)}
				</div>
				<div>
					<motion.button
						className="primary"
						initial={{ x: -40, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								type: "tween",
								duration: 0.5,
								delay: 0.7,
								ease: "easeInOut",
							},
						}}
					>
						{props.title.btn1}
					</motion.button>
					{props.title.btn2 && (
						<motion.button
							initial={{ x: 40, opacity: 0 }}
							animate={{
								x: 0,
								opacity: 1,
								transition: {
									type: "tween",
									duration: 0.5,
									delay: 0.7,
									ease: "easeInOut",
								},
							}}
						>
							{props.title.btn2}
						</motion.button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Content;
