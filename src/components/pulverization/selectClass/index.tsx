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

const SelectClass: React.FC<PickerProps> = ({
  nextStep,
  prevStep,
  type,
  product,
  onChangeHandlerProduct,
}) => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const aux = [
      { name: 'Acaricida' },
      { name: 'Bactericida' },
      { name: 'Espalhante Adesivo' },
      { name: 'Fungicida' },
      { name: 'Estimulante' },
      { name: 'Herbicida' },
      { name: 'Acaricida2' },
      { name: 'Bactericida2' },
      { name: 'Espalhante Adesivo2' },
      { name: 'Fungicida2' },
      { name: 'Estimulante2' },
      { name: 'Herbicida2' },
    ];

    setClasses(aux);
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

  return (
    <View>
      <Header onPressCancel={() => console.log('cancelar')}>
        Novo Produto
      </Header>
      <Container>
        <Card title="Selecione uma classe">
          <SearchInput placeholder="Buscar por Classe" />
          <ClassList
            data={classes}
            keyExtractor={classItem => classItem.name}
            renderItem={({ item: classItem }) => (
              <ItemList
                onPress={() => next(classItem.name)}
                selected={classItem.name === product.classe}
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
          <ButtonText size="large" color="yellow" onPress={prev}>
            Anterior
          </ButtonText>
        )}
      </Container>
    </View>
  );
};

export default SelectClass;
