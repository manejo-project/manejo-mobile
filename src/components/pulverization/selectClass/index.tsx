/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import SearchInput from '../../searchInput';

import { ItemListText, ItemList, ClassList, Container } from './styles';

interface PickerProps {
  nextStep(): void;
  prevStep(): void;
  type: string;
  product: {
    classe: string;
    name: string;
    target: string;
    dose: string;
    productPrice: string;
  };
  onChangeHandlerProduct(input: string, value: any): void;
}

export interface Class {
  name: string;
}

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
}

const SelectClass: React.FC<PickerProps> = ({
  nextStep,
  prevStep,
  type,
  product,
  onChangeHandlerProduct,
}) => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [filterList, setFilterList] = useState<Class[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const aux = [
      { name: 'Acaricida' },
      { name: 'Fungicida' },
      { name: 'Herbicida' },
      { name: 'Inseticida' },
    ];

    setClasses(aux);
    setFilterList(aux);
  }, []);

  const next = useCallback(
    value => {
      onChangeHandlerProduct('classe', value);
      nextStep();
    },
    [nextStep, onChangeHandlerProduct],
  );

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = classes.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, classes],
  );

  return (
    <View>
      <Header>Novo Produto</Header>
      <Container>
        <Card title="Selecione uma classe">
          <SearchInput
            placeholder="Buscar por Classe"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
            {...testProps('search-input')}
          />
          <ClassList
            data={filterList}
            keyExtractor={classItem => classItem.name}
            renderItem={({ item: classItem }) => (
              <ItemList
                onPress={() => next(classItem.name)}
                selected={classItem.name === product.classe}
                {...testProps(
                  `selectClass-itemList-${classItem.name.replace(/\s/g, '')}`,
                )}
              >
                <ItemListText>{classItem.name}</ItemListText>
              </ItemList>
            )}
          />
        </Card>

        {type === 'new' ? (
          <ButtonText size="large" color="red" onPress={prev}>
            Cancelar novo produto
          </ButtonText>
        ) : (
          <ButtonText
            size="large"
            color="yellow"
            onPress={prev}
            {...testProps('selectClass-button-prev')}
          >
            Anterior
          </ButtonText>
        )}
      </Container>
    </View>
  );
};

export default SelectClass;
