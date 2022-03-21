import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  buttons: {
    marginTop: 10,
    padding: 20,
  },
  point: {
    color: theme.colors.highlight,
    fontSize: 16,
  }
})
