import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { useMatch } from '../../hooks/useMatch';
import { api } from '../../services/api';
import { styles } from './styles';

export function CreateGame() {
  const navigation = useNavigation();
  const { createMatch } = useMatch();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItem] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      api.get("/users")
        .then(res => setItems(res.data))
        .catch(err => console.log(err.message));
    })();
  }, []);

  function handleSelectedItems(selectedItem: string[]) {
    setSelectedItem(selectedItem)
  }

  async function handleCreateMatch() {
    try {
      createMatch(selectedItems);

      navigation.navigate("Game" as never)
    } catch (error: any) {
      console.log(error.message);
      alert(error.message);
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Criar Partida
          </Text>

          <View style={styles.select}>
            <MultiSelect
              hideSubmitButton
              uniqueKey="id"
              items={items}
              selectedItems={selectedItems}
              onSelectedItemsChange={handleSelectedItems}
              selectText="Escolha os jogadores"
              searchInputPlaceholderText="Pesquise..."
              searchInputStyle={{ color: 'white' }}
              styleInputGroup={styles.searchBar}
              styleDropdownMenu={styles.dropMenu}
              styleDropdownMenuSubsection={styles.dropMenu}
              styleTextDropdown={styles.innerDropMenu}
              styleTextDropdownSelected={styles.innerDropMenu}
              tagTextColor={theme.colors.heading}
              tagBorderColor={theme.colors.secondary50}
            />
          </View>

          <View style={styles.viewBtn}>
            <Button
              title="Criar partida"
              onPress={handleCreateMatch}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}
