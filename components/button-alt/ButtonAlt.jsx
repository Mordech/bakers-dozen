import React from 'react'
import { Pressable, Text } from 'react-native'
import colors from '../../app-styles/colors'
import themeColor from '../../app-styles/ThemeColors'
import styles from './ButtonStyle'

export default function ButtonAlt(props) {
    const selected = props.item == props.value

    return (
        <Pressable
            style={({ pressed }) => [styles(selected, pressed).container]}
            onPress={props.press}
            android_ripple={{
                color: themeColor(colors.background),
                borderless: false,
            }}
        >
            {({ pressed }) => (
                <Text style={styles(selected, pressed).labelColor}>
                    {props.lable}
                </Text>
            )}
        </Pressable>
    )
}
