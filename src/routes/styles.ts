import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 15,
    right: 15,
    elevation: 20,
    backgroundColor: theme.colors.secondary70,
    borderRadius: 15,
    height: 60,
    borderTopWidth: 0,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  }
})
