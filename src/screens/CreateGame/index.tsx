import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MultiSelect from 'react-native-multiple-select';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { styles } from './styles';

type ItemType = {
  id: string,
  name: string,
}

export function CreateGame() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItem] = useState<ItemType[]>([]);

  useEffect(() => {
    (async () => {
      api.get("/users")
        .then(res => setItems(res.data))
        .catch(err => console.log(err.message));
    })();
  }, []);

  function handleSelectedItems(selectedItem: ItemType[]) {
    setSelectedItem(selectedItem)
  }

  function handleCreateMatch() {
    console.log(selectedItems);
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
