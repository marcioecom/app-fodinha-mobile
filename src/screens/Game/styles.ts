import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: getStatusBarHeight()
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 22,
  },
  content: {
    padding: 20,
  },
  btnGoHome: {
    padding: 20
  }
})
