import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {

  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 20,
  },
  podium: {
    paddingHorizontal: 24,
  },
  matchesContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 24,
  },
  matches: {
    width: '100%',
  }
})
