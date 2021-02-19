import React from 'react'
import Slider from '@react-native-community/slider'
import colors from '../../app-styles/colors'
import sliderStyle from './SliderStyle'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/maps'
import themeColor from '../../app-styles/ThemeColors'
import { Platform, Text, View } from 'react-native'
import appStyles from '../../app-styles/appStyles'

function SliderView(props) {
    return (
        <Slider
            style={sliderStyle().slider}
            step={1}
            thumbTintColor={themeColor(colors.primary)}
            minimumTrackTintColor={themeColor(colors.primary)}
            maximumTrackTintColor={
                Platform.OS === 'android'
                    ? themeColor(colors.primary)
                    : themeColor(colors.secondary)
            }
            tapToSeek={true}
            onValueChange={(value) => props.setHydration(value)}
            minimumValue={50}
            maximumValue={80}
            value={props.hydration.value}
        />
    )
}

function SliderAlt(props) {
    return (
        <View style={sliderStyle().container}>
            <SliderView {...props} />
            <Text style={appStyles().smallText}>
                Set the hydration of your {props.bake.toLowerCase()}
            </Text>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderAlt)
