import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/tesla_logo.svg";

const Header = () => {
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
					<ul>
						<li>Model S</li>
						<li>Model 3</li>
						<li>Model X</li>
						<li>Model Y</li>
						<li>Solar Roof</li>
						<li>Solar Panels</li>
					</ul>
				</div>
				<div className="header__nav">
					<ul>
						<li>Shop</li>
						<li>Account</li>
						<li>Menu</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
