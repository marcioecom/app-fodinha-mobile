import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 120,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 8,
    padding: 5,
  },
  position: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 16,
  },
  username: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 16,
  }
})
