import Content from "./Content";

interface props {
	imageBg: {
		desktopLHD: string;
		mobileLHD: string;
	};
	title: string;
}
const Section: React.FC<props> = (props) => {
	return (
		<section className="section--full">
			<picture>
				<source srcSet={props.imageBg.mobileLHD} media="(max-width: 599px)" />
				<source srcSet={props.imageBg.desktopLHD} media="(min-width: 600px)" />
				<source
					srcSet={props.imageBg.desktopLHD}
					media="(min-width: 600px) and (orientation:portrait)"
				/>
				<img src={props.imageBg.desktopLHD} alt="Flowers" />
			</picture>

			<Content title={props.title} />
		</section>
	);
};
export default Section;
