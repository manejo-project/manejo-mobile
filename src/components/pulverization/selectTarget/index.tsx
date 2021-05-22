/* eslint-disable @typescript-eslint/no-explicit-any */
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
  product: {
    classe: string;
    name: string;
    target: string;
    dose: string;
    productPrice: string;
  };
  onChangeHandlerProduct(input: string, value: any): void;
}

export interface Target {
  name: string;
}

const SelectTarget: React.FC<PickerProps> = ({
  nextStep,
  prevStep,
  product,
  onChangeHandlerProduct,
}) => {
  const [targets, setTargets] = useState<Target[]>([]);
  const [filterList, setFilterList] = useState<Target[]>([]);
  const [filter, setFilter] = useState('');

  const next = useCallback(
    value => {
      onChangeHandlerProduct('target', value);
      nextStep();
    },
    [nextStep, onChangeHandlerProduct],
  );

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  useEffect(() => {
    let data = [{ name: '' }];

    switch (product.classe) {
      case 'Acaricida':
        next('Ácaro');
        return;
      case 'Fungicida':
        data = [
          { name: 'Outras Doenças Fungicidas' },
          { name: 'Ferrugem Asiática' },
          { name: 'Mancha Parda' },
          { name: 'Mancha Alvo' },
          { name: 'Mofo branco' },
          { name: 'Olídio' },
        ];
        break;
      case 'Herbicida':
        data = [
          { name: 'Folhas largas' },
          { name: 'Folhas estreitas ' },
          { name: 'Dessecação' },
        ];
        break;
      default:
        data = [
          { name: 'Outros insetos praga' },
          { name: 'Lagarta-da-soja' },
          { name: 'Percevejo-marrom' },
          { name: 'Lagarta-falsa-medideira' },
        ];
        break;
    }

    setTargets(data);
    setFilterList(data);
  }, [next, product.classe]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = targets.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, targets],
  );

  return (
    <View>
      <Header>Novo Produto</Header>
      <Container>
        <Card title="Selecione um alvo/função">
          <SearchInput
            placeholder="Buscar por Alvo/Função"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
          />
          <TargetList
            data={filterList}
            keyExtractor={targetItem => targetItem.name}
            renderItem={({ item: targetItem }) => (
              <ItemList
                testID={`selectTarget-itemList-${targetItem.name.replace(
                  /\s/g,
                  '',
                )}`}
                onPress={() => next(targetItem.name)}
                selected={targetItem.name === product.target}
              >
                <ItemListText>{targetItem.name.toUpperCase()}</ItemListText>
              </ItemList>
            )}
          />
        </Card>

        <ButtonText
          size="large"
          color="yellow"
          onPress={prev}
          testID="selectTarget-button-prev"
        >
          Anterior
        </ButtonText>
      </Container>
    </View>
  );
};

export default SelectTarget;
