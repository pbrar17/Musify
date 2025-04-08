import { StyleSheet } from 'react-native';
import { colors, fontSize } from '@/constants/tokens';
  // Default styles for the app
export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text,
    },
});

export const utilsStyles = StyleSheet.create({
    itemSeperator: {
        borderColor: colors.textMuted,
        borderWidth: StyleSheet.hairlineWidth,
        opacity:0.3,
    }
});