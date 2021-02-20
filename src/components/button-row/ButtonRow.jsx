import React from 'react';
import { LayoutAnimation, View } from 'react-native';
import { connect } from 'react-redux';
import ButtonAlt from '../button-alt/ButtonAlt.jsx';
import styles, { ButtonRowScrollView } from './ButtonRowStyle';
import {
  mapBakesDispach,
  mapBakesProps,
  mapSizeDispach,
  mapSizeProps,
} from './ButtonRowMapping';
import * as Animations from '../../assets/animations/animations';

function ButtonRow(props) {
  const { list } = props;
  const { value } = props;
  // Toggle current value
  function toggle(item) {
    if (item !== value) {
      props.toggle(item);
      LayoutAnimation.configureNext(Animations.CustomLayoutEaseOut);
    }
  }

  return (
    <ButtonRowScrollView>
      <View style={styles().container}>
        {list.map((item) => (
          <ButtonAlt
            lable={item}
            item={item}
            value={value}
            key={item}
            press={() => toggle(item)}
          />
        ))}
      </View>
    </ButtonRowScrollView>
  );
}

const SizesRow = connect(mapSizeProps, mapSizeDispach)(ButtonRow);
const GoodsRow = connect(mapBakesProps, mapBakesDispach)(ButtonRow);
export { SizesRow, GoodsRow };
