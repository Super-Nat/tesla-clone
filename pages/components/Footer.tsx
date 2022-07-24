import NavbarList from "./NavbarList";
import { useSelector } from "react-redux";

interface RootState {
	footer: {
		footerNav: { title: string; link: string }[];
	};
}

const Footer = () => {
	const footerNav = useSelector((state: RootState) => state.footer.footerNav);
	return (
		<footer>
			<div className="footer__wrap">
				<NavbarList navList={footerNav} />
			</div>
		</footer>
	);
};

export default Footer;
