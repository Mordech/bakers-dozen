import { StyleSheet } from 'react-native';
import colors from '../../app-styles/colors';
import themeColor from '../../app-styles/ThemeColors';

const styles = (selected, pressed) => StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginEnd: 16,
        borderRadius: 30,
        backgroundColor: selected || pressed ? themeColor(colors.primary) : themeColor(colors.secondary),
        opacity: pressed ? 0.7 : 1,
    },
    labelColor: {
        color: selected || pressed ? themeColor(colors.secondary) : themeColor(colors.primary),
    },
})

export default styles
