import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    paddingHorizontal: 16,
    textAlignVertical: 'center'
  }
})
