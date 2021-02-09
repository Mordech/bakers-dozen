import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import appStyles from "../../app-styles/appStyles";
import { getIngredients } from "../../recepies/makeRecepie";
import { mapDispatchToProps, mapStateToProps } from "../../redux/maps";

function Ingredients(props) {
	const bake = props.bake;
	const hydration = props.hydration;
	const size = props.size;

	return (
		<View style={appStyles().list}>
			{getIngredients(bake, hydration, size).map((item, index) => (
				<Text style={appStyles().body} key={index}>
					<Text style={{ fontFamily: "DMSans-Bold" }}>{item.ingredient}:</Text>{" "}
					{Math.floor(item.value)}
					{item.ingredient.includes("Water") ||
					item.ingredient.includes("Olive")
						? "ml"
						: "g"}
				</Text>
			))}
		</View>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
