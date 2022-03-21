import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.secondary70,
    height: 65,
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
