import React from 'react';
import { LayoutAnimation, View } from 'react-native';
import { connect } from 'react-redux';
import ButtonAlt from '../ButtonAlt';
import styles, { ButtonRowScrollView } from './ButtonRowStyle';
import {
  mapBakesDispatch,
  mapBakesProps,
  mapSizeDispatch,
  mapSizeProps,
} from './ButtonRowMapping.js';
import * as Animations from '../../assets/animations/animations.js';

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
            label={item}
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

const SizesRow = connect(mapSizeProps, mapSizeDispatch)(ButtonRow);
const GoodsRow = connect(mapBakesProps, mapBakesDispatch)(ButtonRow);
export { SizesRow, GoodsRow };
