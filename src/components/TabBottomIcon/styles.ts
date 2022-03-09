import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 10 : -5,
  },
  label: {
    fontSize: 14
  }
})
