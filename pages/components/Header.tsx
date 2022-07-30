import { toggleMenu } from "../../store/menu";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/tesla_logo.svg";
import NavbarList from "./NavbarList";
import { useAppDispatch, useAppSelector } from "../../hooks/typeHook";

function Header() {
	const middleNav = useAppSelector((state) => state.header.middleNav);
	const lastNav = useAppSelector((state) => state.header.lastNav);
	const dispatch = useAppDispatch();

	const menuHandler = () => {
		dispatch(toggleMenu());
	};

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
					<ul className="nav-list mobile">
						<NavbarList navList={middleNav} />
					</ul>
				</div>

				<div className="header__nav">
					<ul className="nav-list mobile">
						<NavbarList navList={lastNav} />
						<li className="has-link" onClick={menuHandler}>
							Menu
						</li>
					</ul>
					<span className="menu-btn" onClick={menuHandler}>
						Menu
					</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
