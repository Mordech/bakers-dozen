import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import RecipeAnimation from '../../assets/animations/RecipeAnimations';
import fonts from '../../assets/inputs/fonts';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import styles from './recipeTitleStyles';

function RecipeTitle(props) {
  const { bake } = props;

  return (
    <View style={styles().container}>
      <View style={styles().headlineView}>
        <Text style={appStyles().subHeadline}>Your</Text>
        <Text style={[appStyles().headline, styles().headline]}>
          <Text style={{ fontFamily: fonts.serifBold }}>
            {bake.toLowerCase()}
          </Text>
          <Text>{'\n'}recipe</Text>
        </Text>
      </View>
      <RecipeAnimation />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeTitle);
