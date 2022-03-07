import React from 'react';
import { Text, View, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        { label }
      </Text>
      <TextInput
        { ...rest }
        style={styles.input}
      />
    </View>
  )
}
