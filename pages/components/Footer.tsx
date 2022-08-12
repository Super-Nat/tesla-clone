import { useEffect, useState } from "react";
import NavbarList from "./NavbarList";
import { useAppSelector } from "../../hooks/typeHook";
import { motion, useScroll } from "framer-motion";

const Footer = (props: any) => {
	const footerNav = useAppSelector((state) => state.footer.footerNav);
	const [touchBottom, setTouchBottom] = useState(false);
	const { scrollY } = useScroll();

	const footer = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	useEffect(() => {
		return scrollY.onChange((latest) => {
			if (
				latest >
				document.documentElement.scrollHeight - window.innerHeight - 450
			) {
				setTouchBottom(true);
			} else {
				setTouchBottom(false);
			}
		});
	});

	return (
		<>
			{touchBottom && (
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
