/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
import { View, Modal } from 'react-native';
import ButtonIcon from '../../buttonIcon';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import Input from '../../input';
import SearchInput from '../../searchInput';

import {
  Container,
  PestList,
  ItemList,
  ItemListImage,
  ItemListText,
  ItemListContainer,
  ModalView,
  ModalCenteredView,
  ModalButton,
  ModalHeader,
  ModalHeaderText,
  Buttons,
  ItemListLabel,
} from './styles';

interface NaturalPredatorDataProps {
  prevStep(): void;
  nextStep(): void;
  naturalsPredator: INaturalPredator[];
  handleSetNaturalsPredator(naturalsPredator: INaturalPredator[]): void;
}

export interface INaturalPredator {
  id: string;
  image: string;
  name: string;
  average: string;
}

const NaturalPredatorOccurrence: React.FC<NaturalPredatorDataProps> = ({
  prevStep,
  nextStep,
  naturalsPredator,
  handleSetNaturalsPredator,
}) => {
  const [naturalPredator, setNaturalPredator] = useState<INaturalPredator>({
    id: '',
    image: '',
    name: '',
    average: '',
  });
  const [average, setAverage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterList, setFilterList] = useState<INaturalPredator[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (naturalsPredator.length === 0) {
      const data = [
        {
          id: '1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta com Baculovirus',
          average: '',
        },
        {
          id: '2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta com Nomuraea',
          average: '',
        },
        {
          id: '3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta da Soja',
          average: '',
        },
        {
          id: '4',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta',
          average: '',
        },
      ];
      handleSetNaturalsPredator(data);
    }
    setFilterList(naturalsPredator);
  }, [handleSetNaturalsPredator, naturalsPredator]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const closeModal = () => {
    setNaturalPredator({
      id: '',
      image: '',
      name: '',
      average: '',
    });
    setAverage('');
    setModalVisible(false);
    setFilter('');
  };

  const openModal = (natural: INaturalPredator) => {
    setNaturalPredator({
      ...natural,
      id: natural.id,
      image: natural.image,
      name: natural.name,
    });
    setModalVisible(true);
  };

  const createNaturalPredator = useCallback(() => {
    const teste = naturalsPredator.findIndex(
      aux => aux.id === naturalPredator.id,
    );
    naturalsPredator[teste].average = average;
    setNaturalPredator({
      id: '',
      image: '',
      name: '',
      average: '',
    });
    closeModal();
    setFilterList(naturalsPredator);
  }, [naturalPredator, naturalsPredator, average]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = naturalsPredator.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, naturalsPredator],
  );

  return (
    <>
      <Header>Inimigos Naturais</Header>
      <Container>
        <Card title="Selecione o inimigo:">
          <SearchInput
            placeholder="Buscar por Inimigo Natural"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
          />
          <PestList
            data={filterList}
            keyExtractor={naturalPredatorItem => naturalPredatorItem.name}
            renderItem={({ item: naturalPredatorItem }) => (
              <ItemList>
                <ItemListImage source={{ uri: naturalPredatorItem.image }} />
                <ItemListContainer>
                  <ItemListLabel>
                    <ItemListText>{naturalPredatorItem.name}</ItemListText>
                    {naturalPredatorItem.average !== '' ? (
                      <ItemListText>
                        Média: {naturalPredatorItem.average}
                      </ItemListText>
                    ) : null}
                  </ItemListLabel>
                  {naturalPredatorItem.average !== '' ? (
                    <View style={{ paddingRight: 4 }}>
                      <ButtonIcon
                        icon="trash"
                        color="red"
                        colorIcon="white"
                        size="small"
                        onPress={() => {
                          // eslint-disable-next-line no-console
                          console.log('remove');
                        }}
                      />
                    </View>
                  ) : (
                    <ButtonIcon
                      icon="plus"
                      color="white"
                      colorIcon="black"
                      size="small"
                      onPress={() => {
                        openModal(naturalPredatorItem);
                      }}
                    />
                  )}
                </ItemListContainer>
              </ItemList>
            )}
          />
        </Card>
        <Buttons>
          <ButtonText
            size="small"
            color="yellow"
            onPress={prev}
            style={{ marginRight: 4 }}
          >
            Anterior
          </ButtonText>
          <ButtonText
            size="small"
            color="green"
            onPress={next}
            style={{ marginLeft: 4 }}
          >
            Próximo
          </ButtonText>
        </Buttons>
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <ModalCenteredView>
            <ModalView>
              <ModalHeader>
                <ModalHeaderText>{naturalPredator.name}</ModalHeaderText>
              </ModalHeader>

              <Card title="Digite a média encontrada:">
                <Input
                  placeholder="0,00"
                  onChangeText={value => {
                    setAverage(value);
                  }}
                  value={average}
                  keyboardType="numeric"
                />
              </Card>

              <ModalButton>
                <ButtonIcon
                  size="large"
                  color="red"
                  colorIcon="white"
                  icon="times"
                  onPress={() => {
                    closeModal();
                  }}
                />
                <ButtonIcon
                  size="large"
                  color="green"
                  colorIcon="white"
                  icon="check"
                  onPress={() => {
                    createNaturalPredator();
                  }}
                />
              </ModalButton>
            </ModalView>
          </ModalCenteredView>
        </Modal>
      </Container>
    </>
  );
};

export default NaturalPredatorOccurrence;
