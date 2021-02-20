import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import RecepieAnimation from '../../assets/animations/recepieAnimations.jsx';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import appStyles from '../../app-styles/appStyles';
import fonts from '../../assets/inputs/fonts';
import styles from './recepieTitleStyles';

function RecepieTitle(props) {
  const { bake } = props;

  return (
    <View style={styles().container}>
      <View style={styles().headlineView}>
        <Text style={appStyles().subHeadline}>Your</Text>
        <Text style={[appStyles().headline, styles().headline]}>
          <Text style={{ fontFamily: fonts.serifBold }}>
            {bake.toLowerCase()}
          </Text>
          <Text>{'\n'}recepie</Text>
        </Text>
      </View>
      <RecepieAnimation />
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecepieTitle);
