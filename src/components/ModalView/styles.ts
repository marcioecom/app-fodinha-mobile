import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 200,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  }
})
