import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import SearchInput from '../../searchInput';

import { ItemListText, ItemList, TargetList, Container } from './styles';

interface PickerProps {
  nextStep(): void;
  prevStep(): void;
}

export interface Target {
  name: string;
}

const SelectTarget: React.FC<PickerProps> = ({ nextStep, prevStep }) => {
  const [targets, setTargets] = useState<Target[]>([]);

  useEffect(() => {
    const aux = [
      { name: 'Outras Doenças Fungicidas' },
      { name: 'Ferrugem Asiática' },
      { name: 'Mancha Parda' },
      { name: 'Mancha Alvo' },
      { name: 'Mofo branco' },
      { name: 'Olídio' },
    ];

    setTargets(aux);
  }, []);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  return (
    <View>
      <Header onPressCancel={() => console.log('cancelar')}>
        Novo Produto
      </Header>
      <Container>
        <Card title="Selecione um alvo/função">
          <SearchInput placeholder="Buscar por Alvo/Função" />
          <TargetList
            data={targets}
            keyExtractor={targetItem => targetItem.name}
            renderItem={({ item: targetItem }) => (
              <ItemList onPress={next}>
                <ItemListText>{targetItem.name.toUpperCase()}</ItemListText>
              </ItemList>
            )}
          />
        </Card>

        <ButtonText size="large" color="yellow" onPress={prev}>
          Anterior
        </ButtonText>
      </Container>
    </View>
  );
};

export default SelectTarget;
