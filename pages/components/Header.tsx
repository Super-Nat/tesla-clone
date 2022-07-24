import { useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/tesla_logo.svg";
import NavbarList from "./NavbarList";

interface RootState {
	header: {
		middleNav: { title: string; link: string }[];
		lastNav: { title: string; link: string }[];
	};
}

const Header = () => {
	const middleNav = useSelector((state: RootState) => state.header.middleNav);
	const lastNav = useSelector((state: RootState) => state.header.lastNav);
	return (
		<header>
			<div className="header__wrap">
				<div className="header__logo">
					<Link href="/">
						<a>
							<Image src={Logo} alt="logo" width={120} height={24} />
						</a>
					</Link>
				</div>
				<div className="header__nav">
					<NavbarList navList={middleNav} />
				</div>
				<div className="header__nav">
					<NavbarList navList={lastNav} />
				</div>
			</div>
		</header>
	);
};

export default Header;
