import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import isWide from '../../app-styles/isWide';
import { getInstructions } from '../../recipes/make-recipe';
import { mapStateToProps } from '../../redux/maps';
import styles from './recipesStyle';

function Recipes(props) {
  const { bake } = props;
  return (
    <View style={appStyles().list}>
      {getInstructions(bake).map((item, index) => (
        <View style={[appStyles.list]} key={index}>
          <View style={styles().listItem}>
            <Text style={[appStyles().body, styles().listNumber]}>
              {index + 1}.
            </Text>
            <Text
              style={[
                appStyles().body,
                { maxWidth: isWide(1024) ? 700 : 500 },
              ]}>
              {item}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default connect(mapStateToProps)(Recipes);
