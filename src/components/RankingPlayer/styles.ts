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
