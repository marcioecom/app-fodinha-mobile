import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  rankingColumn: {},
  position: {
    fontSize: 16,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text500,
  },
  playerName: {
    color: theme.colors.heading,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  points: {
    color: theme.colors.heading,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  lastWin: {
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  }
})
