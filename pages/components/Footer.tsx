import { useEffect, useState } from "react";
import NavbarList from "./NavbarList";
import { useAppSelector } from "../../hooks/typeHook";
import { motion } from "framer-motion";

const Footer = (props: any) => {
	const footerNav = useAppSelector((state) => state.footer.footerNav);

	const footer = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	// console.log(props.touchBottom);

	return (
		<>
			{props.touchBottom && (
				<motion.footer
					variants={footer}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<div className="footer__wrap">
						<ul className="nav-list">
							<NavbarList navList={footerNav} />
						</ul>
					</div>
				</motion.footer>
			)}
		</>
	);
};

export default Footer;
