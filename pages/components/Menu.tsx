import { useAppDispatch, useAppSelector } from "../../hooks/typeHook";
import { motion, AnimatePresence } from "framer-motion";
import { toggleMenu } from "../../store/menu";
import disableScroll from "disable-scroll";
import { useEffect } from "react";
import Link from "next/link";

const Menu = () => {
	const isOpen = useAppSelector((state) => state.menu.isOpen);
	const dispatch = useAppDispatch();

	const menuHandler = (
		e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent
	) => {
		e.stopPropagation();
		dispatch(toggleMenu());
	};

	useEffect(() => {
		if (isOpen) {
			disableScroll.on();
		} else {
			disableScroll.off();
		}
	}, [isOpen]);

	const backdrop = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};
	const menuNav = {
		hidden: { opacity: 0, x: 300 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 300 },
	};

	return (
		<AnimatePresence
			initial={false}
			exitBeforeEnter={true}
			onExitComplete={() => null}
		>
			{isOpen && (
				<motion.div
					className="menu"
					onClick={menuHandler}
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<motion.div
						className="menu__wrap"
						variants={menuNav}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
					>
						<div className="menu__nav">
							<div className="menu__header">
								<div className="menu__close" onClick={menuHandler}>
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</div>
							<div className="menu__content">
								<ul>
									<li>
										<Link href="#">
											<a>Existing Inventory</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Used Inventory</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Trade-In</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Test Drive</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Insurance</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Cybertruck</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Roadster</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Semi</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Charging</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Powerwall</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Commercial Energy</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Utilities</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Find Us</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Support</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Investor Relations</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Menu;
