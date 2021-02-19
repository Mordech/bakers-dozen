import React from 'react';
import { LayoutAnimation, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import ButtonAlt from '../button-alt/ButtonAlt.jsx';
import styles from './ButtonRowStyle';
import {
  mapBakesDispach,
  mapBakesProps,
  mapSizeDispach,
  mapSizeProps,
} from './ButtonRowMapping';
import * as Animations from '../../assets/animations/animations';

function ButtonRow(props) {
  function toggle(item) {
    if (item !== props.value) {
      props.toggle(item);
      LayoutAnimation.configureNext(Animations.CustomLayoutEaseOut);
    }
  }

  const { list } = props;

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}>
      <View style={styles().container}>
        {list.map((item) => (
          <ButtonAlt
            lable={item}
            item={item}
            value={props.value}
            key={item}
            press={() => toggle(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const SizesRow = connect(mapSizeProps, mapSizeDispach)(ButtonRow);
const GoodsRow = connect(mapBakesProps, mapBakesDispach)(ButtonRow);
export { SizesRow, GoodsRow };