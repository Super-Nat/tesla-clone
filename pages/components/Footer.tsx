import { useEffect, useState } from "react";
import NavbarList from "./NavbarList";
import { useAppSelector } from "../../hooks/typeHook";
import { motion, useScroll } from "framer-motion";

const Footer = () => {
	const footerNav = useAppSelector((state) => state.footer.footerNav);
	const [isOpen, setIsOpen] = useState(false);
	const { scrollY } = useScroll();

	const footer = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	useEffect(() => {
		scrollY.onChange((latest) => {
			console.log(latest);

			// latest >=
			// document.getElementById("main")?.offsetHeight - window.innerHeight - 400
			// 	? setIsOpen(true)
			// 	: setIsOpen(false);
		});
	}, [isOpen, scrollY]);

	return (
		<>
			{isOpen && (
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
