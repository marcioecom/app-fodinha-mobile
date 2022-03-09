import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: getBottomSpace() + 25,
    left: 15,
    right: 15,
    elevation: 20,
    backgroundColor: theme.colors.secondary70,
    borderRadius: 15,
    height: 60,
    borderTopWidth: 0,
    padding: 10,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  }
})
