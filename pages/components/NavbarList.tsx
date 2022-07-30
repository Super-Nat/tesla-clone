import Link from "next/link";

interface props {
	navList: {
		title: string;
		link: string;
	}[];
}
const NavbarList: React.FC<props> = (props) => {
	return (
		<>
			{props.navList?.map((item, index) => (
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
		</>
	);
};

export default NavbarList;
