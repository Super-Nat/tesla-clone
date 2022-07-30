import Link from "next/link";

interface props {
	title: string;
}

const Content: React.FC<props> = (props) => {
	return (
		<div className="content">
			<div className="content__wrapper">
				<div>
					<h1>{props.title}</h1>
					<p>
						Order Online for{" "}
						<Link href="/">
							<a>Touchless Delivery</a>
						</Link>
					</p>
				</div>
				<div>
					<button className="primary">Custom Order</button>
					<button>Existing Inventory</button>
				</div>
			</div>
		</div>
	);
};

export default Content;
