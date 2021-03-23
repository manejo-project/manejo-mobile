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
}

export interface Class {
  name: string;
}

const SelectClass: React.FC<PickerProps> = ({ nextStep, prevStep }) => {
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
        <Card title="Selecione uma classe">
          <SearchInput placeholder="Buscar por Classe" />
          <ClassList
            data={classes}
            keyExtractor={classItem => classItem.name}
            renderItem={({ item: classItem }) => (
              <ItemList onPress={next}>
                <ItemListText>{classItem.name}</ItemListText>
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

export default SelectClass;
