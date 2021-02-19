import React, { useRef } from 'react';
import { Pressable, Text, LayoutAnimation, Animated } from 'react-native';
import { connect } from 'react-redux';
import appStyles from '../../app-styles/appStyles';
import { fonts } from '../../assets/inputs/fonts';
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps';
import getTip from './hydrationTipsText';
import styles from './HydrationTipStyle';
import * as Animations from '../../assets/animations/animations';

function HydrationTip(props) {
  const { readMore } = props;
  const fadeText = useRef(new Animated.Value(0)).current;

  function toggleReadMore() {
    props.toggleReadMore(readMore);
    LayoutAnimation.configureNext(Animations.CustomLayoutSpring);
  }

  function ReadMore() {
    if (!readMore) {
      fadeText.resetAnimation();
      return (
        <Text>
          {'... \n'}
          <Text style={{ fontFamily: fonts.sansBold }}>Learn more</Text>
        </Text>
      );
    }
    Animations.fadeIn(fadeText);
    return (
      <Animated.Text style={[{ opacity: fadeText }]}>
        {'. '}
        {getTip(props.bake)}
        <Animated.Text style={{ fontFamily: fonts.sansBold }}>
          {'  '}Show less
        </Animated.Text>
      </Animated.Text>
    );
  }
  return (
    <Pressable style={styles().constainer} onPress={() => toggleReadMore()}>
      <Text style={appStyles().smallText}>
        *Hydration is the weight of liquids reletive to the weight of flour in
        your {props.bake.toLowerCase()}
        <ReadMore />
      </Text>
    </Pressable>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HydrationTip);
