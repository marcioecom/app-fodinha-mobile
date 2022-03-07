import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, Animated } from 'react-native';

import { styles } from './styles';
import fodinhaLogo from '../../assets/FodinhaAppNoBG.png';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 1,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleSubmit() {
    console.log(email, password);
    alert('oi')
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode='contain'
          source={fodinhaLogo}
          style={styles.image}
        />
      </View>

      <Animated.View
        style={[
          styles.form,
          { transform: [{ translateY: offset.y }] }
        ]}
      >
        <Input
          label="Email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={email}
        />
        <Input
          label="Senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={password}
        />

        <View style={styles.submitBtn}>
          <Button
            title="Entrar"
            onPress={handleSubmit}
          />
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}
