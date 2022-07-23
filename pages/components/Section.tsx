interface props {
	imageBg: {
		desktopLHD: string;
		mobileLHD: string;
	};
}
const Section = (props: props) => {
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
		</section>
	);
};
export default Section;
