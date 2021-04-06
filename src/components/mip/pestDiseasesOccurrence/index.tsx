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

interface PestDiseasesDataProps {
  prevStep(): void;
  nextStep(): void;
  pestsDiseases: IPestDiseases[];
  handleSetPestsDiseases(pestsDiseases: IPestDiseases[]): void;
}

export interface IPestDiseases {
  id: string;
  image: string;
  name: string;
  average: string;
}

const PestDiseasesOccurrence: React.FC<PestDiseasesDataProps> = ({
  prevStep,
  nextStep,
  pestsDiseases,
  handleSetPestsDiseases,
}) => {
  const [pestDiseases, setPestDiseases] = useState<IPestDiseases>({
    id: '',
    image: '',
    name: '',
    average: '',
  });
  const [average, setAverage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterList, setFilterList] = useState<IPestDiseases[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (pestsDiseases.length === 0) {
      const data = [
        {
          id: '1',
          image: 'https://i.ibb.co/CzSNr8z/soja.jpg',
          name: 'Lagarta com Baculovirus',
          average: '',
        },
        {
          id: '2',
          image: 'https://i.ibb.co/CzSNr8z/soja.jpg',
          name: 'Lagarta com Nomuraea',
          average: '',
        },
        {
          id: '3',
          image: 'https://i.ibb.co/CzSNr8z/soja.jpg',
          name: 'Lagarta da Soja',
          average: '',
        },
        {
          id: '4',
          image: 'https://i.ibb.co/CzSNr8z/soja.jpg',
          name: 'Lagarta',
          average: '',
        },
      ];

      handleSetPestsDiseases(data);
    }
    setFilterList(pestsDiseases);
  }, [handleSetPestsDiseases, pestsDiseases]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const closeModal = () => {
    setPestDiseases({
      id: '',
      image: '',
      name: '',
      average: '',
    });
    setAverage('');
    setModalVisible(false);
    setFilter('');
  };

  const openModal = (disease: IPestDiseases) => {
    setPestDiseases({
      ...disease,
      id: disease.id,
      image: disease.image,
      name: disease.name,
    });
    setModalVisible(true);
  };

  const createPestDiseases = useCallback(() => {
    const teste = pestsDiseases.findIndex(aux => aux.id === pestDiseases.id);
    pestsDiseases[teste].average = average;
    setPestDiseases({
      id: '',
      image: '',
      name: '',
      average: '',
    });
    closeModal();
    setFilterList(pestsDiseases);
  }, [pestDiseases, pestsDiseases, average]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = pestsDiseases.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, pestsDiseases],
  );

  return (
    <>
      <Header>Doenças das Pragas</Header>
      <Container>
        <Card title="Selecione a doença:">
          <SearchInput
            placeholder="Buscar por Doença"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
          />
          <PestList
            data={filterList}
            keyExtractor={pestDiseasesItem => pestDiseasesItem.name}
            renderItem={({ item: pestDiseasesItem }) => (
              <ItemList>
                <ItemListImage source={{ uri: pestDiseasesItem.image }} />
                <ItemListContainer>
                  <ItemListLabel>
                    <ItemListText>{pestDiseasesItem.name}</ItemListText>
                    {pestDiseasesItem.average !== '' ? (
                      <ItemListText>
                        Média: {pestDiseasesItem.average}
                      </ItemListText>
                    ) : null}
                  </ItemListLabel>
                  {pestDiseasesItem.average !== '' ? (
                    <View style={{ paddingRight: 4 }}>
                      <ButtonIcon
                        icon="trash"
                        color="red"
                        colorIcon="white"
                        size="small"
                        onPress={() => {
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
                        openModal(pestDiseasesItem);
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
                <ModalHeaderText>{pestDiseases.name}</ModalHeaderText>
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
                    createPestDiseases();
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

export default PestDiseasesOccurrence;
