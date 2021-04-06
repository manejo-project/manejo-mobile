import React, { useCallback, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal, ScrollView } from 'react-native';
import Calendar from '@react-native-community/datetimepicker';
import CalendarContainer from '../../calendarContainer';
import Card from '../../card';

import {
  Container,
  ZeroValue,
  OneValue,
  FiveValue,
  AnotherValue,
  Buttons,
  ZeroValueText,
  OneValueText,
  FiveValueText,
  AnotherValueText,
  ModalView,
  ModalCenteredView,
  ModalButton,
  ModalHeader,
  ModalHeaderText,
} from './styles';
import PickerContainer from '../../pickerContainer';
import Header from '../../header';
import ButtonText from '../../buttonText';
import Input from '../../input';
import ButtonIcon from '../../buttonIcon';

interface MipSampleDataProps {
  nextStep(): void;
  sampleData: {
    sampleDate: Date;
    growthPhase: string;
    desfolha: string;
  };
  onChangeHandlerSampleData(input: string, value: any): void;
}

const MipSample: React.FC<MipSampleDataProps> = ({
  nextStep,
  sampleData,
  onChangeHandlerSampleData,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedZeroValue, setSelectedZeroValue] = useState(false);
  const [selectedOneValue, setSelectedOneValue] = useState(false);
  const [selectedFiveValue, setSelectedFiveValue] = useState(false);
  const [selectedAnotherValue, setSelectedAnotherValue] = useState(false);
  const [valueDesfolha, setValueDesfolha] = useState('Outro Valor ');
  const [show, setShow] = useState(false);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const showMode = () => {
    setShow(true);
  };

  const onChange = (event: Event, selectedDate: Date | undefined): void => {
    const currentDate = selectedDate || sampleData.sampleDate;
    setShow(false);
    onChangeHandlerSampleData('sampleDate', currentDate);
  };

  return (
    <ScrollView>
      <Header onPressCancel={() => console.log('Button Cancel')}>
        Dados da Amostragem
      </Header>
      <Container>
        <Card title="Selecione a date da coleta">
          <CalendarContainer onPress={showMode} date={sampleData.sampleDate} />
          {show && (
            <Calendar
              testID="dateTimePicker"
              value={sampleData.sampleDate}
              display="default"
              onChange={onChange}
            />
          )}
        </Card>
        <Card title="Selecione o estádio da cultura">
          <PickerContainer>
            <Picker
              selectedValue={sampleData.growthPhase}
              onValueChange={(itemValue, itemIndex) =>
                onChangeHandlerSampleData('growthPhase', itemValue)
              }
            >
              <Picker.Item label="V1" value="V1" />
              <Picker.Item label="V2" value="V2" />
              <Picker.Item label="V3" value="V3" />
              <Picker.Item label="V4" value="V4" />
              <Picker.Item label="V5" value="V5" />
            </Picker>
          </PickerContainer>
        </Card>
        <Card title="% de Desfolha (em números inteiros)">
          <Buttons>
            <ZeroValue
              onPress={() => {
                setSelectedZeroValue(true);
                setSelectedOneValue(false);
                setSelectedFiveValue(false);
                setSelectedAnotherValue(false);
                onChangeHandlerSampleData('desfolha', '0');
              }}
              flag={selectedZeroValue}
            >
              <ZeroValueText flag={selectedZeroValue}>0%</ZeroValueText>
            </ZeroValue>
            <OneValue
              onPress={() => {
                setSelectedZeroValue(false);
                setSelectedOneValue(true);
                setSelectedFiveValue(false);
                setSelectedAnotherValue(false);
                onChangeHandlerSampleData('desfolha', '1');
              }}
              flag={selectedOneValue}
            >
              <OneValueText flag={selectedOneValue}>1%</OneValueText>
            </OneValue>
            <FiveValue
              onPress={() => {
                setSelectedZeroValue(false);
                setSelectedOneValue(false);
                setSelectedFiveValue(true);
                setSelectedAnotherValue(false);
                onChangeHandlerSampleData('desfolha', '5');
              }}
              flag={selectedFiveValue}
            >
              <FiveValueText flag={selectedFiveValue}>5%</FiveValueText>
            </FiveValue>
            <AnotherValue
              onPress={() => {
                setSelectedZeroValue(false);
                setSelectedOneValue(false);
                setSelectedFiveValue(false);
                setSelectedAnotherValue(true);
                setModalVisible(true);
              }}
              flag={selectedAnotherValue}
            >
              <AnotherValueText flag={selectedAnotherValue}>
                {valueDesfolha}%
              </AnotherValueText>
            </AnotherValue>
          </Buttons>
        </Card>
        <ButtonText size="large" color="green" onPress={next}>
          Próximo
        </ButtonText>
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
                <ModalHeaderText>
                  % de Desfolha (em números inteiros)
                </ModalHeaderText>
              </ModalHeader>
              <Card title="Digite o valor:">
                <Input
                  keyboardType="numeric"
                  placeholder="0,00"
                  value={valueDesfolha}
                  onFocus={() => setValueDesfolha('')}
                  onChangeText={value => {
                    setValueDesfolha(value);
                    onChangeHandlerSampleData('desfolha', value);
                  }}
                />
              </Card>

              <ModalButton>
                <ButtonIcon
                  size="large"
                  color="red"
                  colorIcon="white"
                  icon="times"
                  onPress={() => {
                    toggleModal();
                    setValueDesfolha('Outro Valor');
                  }}
                />
                <ButtonIcon
                  size="large"
                  color="green"
                  colorIcon="white"
                  icon="check"
                  onPress={toggleModal}
                />
              </ModalButton>
            </ModalView>
          </ModalCenteredView>
        </Modal>
      </Container>
    </ScrollView>
  );
};

export default MipSample;
