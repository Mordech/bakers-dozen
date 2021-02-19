import { StyleSheet } from 'react-native'
import isWide from '../../app-styles/isWide'

const styles = () =>
    StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: 24,
            maxWidth: isWide(1024) ? '100%' : 476,
        },
        headlineView: {
            flex: 1,
            marginTop: 8,
            marginEnd: 16,
        },
        headline: {
            lineHeight: 36,
            paddingTop: 14,
            marginTop: -6,
        },
    })

export default styles
