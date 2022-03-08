import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 60,
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
