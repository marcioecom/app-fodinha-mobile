import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginBottom: 15,
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
