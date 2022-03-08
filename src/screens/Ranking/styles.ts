import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() + 30,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 32
  },
  tableHead: {
    backgroundColor: theme.colors.secondary70,
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  column: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 15
  },
  table: {
    flex: 1,
  },
  ranking: {
    width: '100%',
  }
})
