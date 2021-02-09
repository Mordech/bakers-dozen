import React from "react";
import LottieView from "lottie-react-native";

import bread_light from "./bread-light.json";
import bread_dark from "./bread-dark.json";
import pizza_light from "./pizza-light.json";
import pizza_dark from "./pizza-dark.json";
import pretzel_light from "./pretzel-light.json";
import pretzel_dark from "./pretzel-dark.json";
import { goods } from "../inputs/BakeThings";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/maps";
import isWide from "../../app-styles/isWide";

const getAnimationLink = (bake, theme) => {
	switch (theme) {
		case "light":
			switch (bake) {
				case goods.bread:
					return bread_light;
				case goods.pizza:
					return pizza_light;
				case goods.pretzel:
					return pretzel_light;
				default:
					console.error(
						"Can't find your bake running default animation for dark theme"
					);
					return bread_light;
			}
		case "dark":
			switch (bake) {
				case goods.bread:
					return bread_dark;
				case goods.pizza:
					return pizza_dark;
				case goods.pretzel:
					return pretzel_dark;
				default:
					console.error(
						"Can't find your bake running default animation for dark theme"
					);
					return bread_dark;
			}
		default:
			console.error(
				"Oops, animation has failed for some reason running default animation 🍞"
			);
			return bread_light;
	}
};

function RecepieAnimation(props) {
	return (
		<LottieView
			style={{
				flex: isWide(321) ? 0 : 1,
				maxWidth: 150,
				height: "100%",
				position: "relative",
			}}
			source={getAnimationLink(props.bake, props.theme)}
			autoPlay
			loop
		/>
	);
}

// function RecepieAnimation(props) {
// 	return (
// 		<RecepieAnimationView link={getAnimationLink(props.bake, props.theme)} />
// 	);
// }

export default connect(mapStateToProps, mapDispatchToProps)(RecepieAnimation);
