import Link from "next/link";

interface props {
	navList: {
		title: string;
		link: string;
	}[];
}
const NavbarList = (props: props) => {
	return (
		<ul className="nav-list">
			{props.navList.map((item, index) => (
				<li key={index} className={item.link ? "has-link" : ""}>
					{item.link ? (
						<Link href={item.link}>
							<a>{item.title}</a>
						</Link>
					) : (
						<span>{item.title}</span>
					)}
				</li>
			))}
		</ul>
	);
};

export default NavbarList;
