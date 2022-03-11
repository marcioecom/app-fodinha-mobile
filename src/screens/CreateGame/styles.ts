import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: getStatusBarHeight() + 30,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 32
  },
  select: {
    marginTop: 30
  },
  dropMenu: {
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    paddingLeft: 10,
    padding: 5,
    height: 47,
    borderBottomWidth: 0,
  },
  innerDropMenu: {
    color: 'white',
  },
  searchBar: {
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  viewBtn: {
    marginTop: 20,
    // width: '100%',
    // position: 'absolute',
    // alignSelf: 'center',
    // bottom: 100,
  }
})
