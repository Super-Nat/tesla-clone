import { useAppDispatch, useAppSelector } from "../../hooks/typeHook";
import { motion, AnimatePresence } from "framer-motion";
import { toggleMenu } from "../../store/menu";
import disableScroll from "disable-scroll";
import { useEffect } from "react";

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
						<div className="menu__nav"></div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Menu;
