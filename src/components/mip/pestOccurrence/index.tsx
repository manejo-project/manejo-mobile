import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-native';
import ButtonIcon from '../../buttonIcon';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import Input from '../../input';
import SearchInput from '../../searchInput';
import {
  Container,
  PestList,
  ModalView,
  ModalCenteredView,
  ModalButton,
  ModalHeader,
  ModalHeaderText,
  ItemListPestSize,
  ItemListTextPestSize,
  Buttons,
} from './styles';
import PestItem from './pestItem';

interface PestOccurrenceDataProps {
  prevStep(): void;
  nextStep(): void;
  pests: IPest[];
  handleSetPests(pests: IPest[]): void;
}

interface Occurrence {
  size: string;
  average: string;
}

export interface IPest {
  id: string;
  type: string;
  image: string;
  name: string;
  occurrence: Occurrence[];
}

const PestOccurrence: React.FC<PestOccurrenceDataProps> = ({
  prevStep,
  nextStep,
  pests,
  handleSetPests,
}) => {
  const [pest, setPest] = useState<IPest>({
    id: '',
    type: '',
    image: '',
    name: '',
    occurrence: [
      {
        size: '',
        average: '',
      },
    ],
  });
  const [pestSize, setPestSize] = useState('');
  const [pestAverage, setPestAverage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterList, setFilterList] = useState<IPest[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (pests.length === 0) {
      const data = [
        {
          id: '1',
          type: 'lagarta',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta da Soja',
          occurrence: [],
        },
        {
          id: '2',
          type: 'lagarta',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta',
          occurrence: [],
        },
        {
          id: '3',
          type: 'lagarta',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Lagarta da Soja3',
          occurrence: [],
        },
        {
          id: '4',
          type: 'percevejo',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/1024px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg',
          name: 'Percevejo',
          occurrence: [],
        },
      ];
      handleSetPests(data);
    }
    setFilterList(pests);
  }, [handleSetPests, pests]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const closeModal = () => {
    setPest({
      id: '',
      type: 'lagarta',
      image: '',
      name: '',
      occurrence: [
        {
          size: '',
          average: '',
        },
      ],
    });
    setFilter('');
    setModalVisible(false);
  };

  const openModal = (pestItem: IPest) => {
    setPest({
      ...pest,
      id: pestItem.id,
      image: pestItem.image,
      name: pestItem.name,
      type: pestItem.type,
    });
    setModalVisible(true);
  };

  const createPest = useCallback(() => {
    const teste = pests.findIndex(aux => aux.id === pest.id);
    pests[teste].occurrence.push({
      size: pestSize,
      average: pestAverage,
    });
    setPestSize('');
    setPestAverage('');
    closeModal();
    setFilterList(pests);
  }, [pest, pests, pestAverage, pestSize]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = pests.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, pests],
  );

  return (
    <>
      <Header>Flutuação das Pragas</Header>
      <Container>
        <Card title="Selecione a praga:">
          <SearchInput
            placeholder="Buscar por Praga"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
          />
          <PestList
            data={filterList}
            keyExtractor={pestItem => pestItem.id}
            renderItem={({ item: pestItem }) => (
              <PestItem pest={pestItem} openModal={() => openModal(pestItem)} />
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
                <ModalHeaderText>{pest.name}</ModalHeaderText>
              </ModalHeader>
              <Card title="Selecione o tamanho da praga:">
                {pest.type === 'lagarta' && (
                  <>
                    <ItemListPestSize
                      flag={pestSize === '< 1,5 cm'}
                      onPress={() => setPestSize('< 1,5 cm')}
                    >
                      <ItemListTextPestSize>&lt; 1,5 cm</ItemListTextPestSize>
                    </ItemListPestSize>
                    <ItemListPestSize
                      flag={pestSize === '> 1,5 cm'}
                      onPress={() => setPestSize('> 1,5 cm')}
                    >
                      <ItemListTextPestSize>&gt; 1,5 cm</ItemListTextPestSize>
                    </ItemListPestSize>
                  </>
                )}

                {pest.type === 'percevejo' && (
                  <>
                    <ItemListPestSize
                      flag={pestSize === '3º ao 5º instar'}
                      onPress={() => setPestSize('3º ao 5º instar')}
                    >
                      <ItemListTextPestSize>
                        3º ao 5º instar
                      </ItemListTextPestSize>
                    </ItemListPestSize>
                    <ItemListPestSize
                      flag={pestSize === 'Adultos'}
                      onPress={() => setPestSize('Adultos')}
                    >
                      <ItemListTextPestSize>Adultos</ItemListTextPestSize>
                    </ItemListPestSize>
                  </>
                )}
              </Card>
              <Card title="Digite a média encontrada:">
                <Input
                  placeholder="0,00"
                  onChangeText={value => setPestAverage(value)}
                  value={pestAverage}
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
                    createPest();
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

export default PestOccurrence;
