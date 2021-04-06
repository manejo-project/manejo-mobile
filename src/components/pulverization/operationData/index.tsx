/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useState } from 'react';
import Calendar from '@react-native-community/datetimepicker';
import { View } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import PickerContainer from '../../pickerContainer';
import Input from '../../input';

import { Container, Buttons, No, Yes, NoText, YesText } from './styles';
import CalendarContainer from '../../calendarContainer';

interface OperationDataProps {
  nextStep(): void;
  type: string;
  pulverization: {
    growthPhase: string;
    selected: boolean;
    caldaVolume: string;
    sampleDate: Date;
    datePartial: Date;
  };
  onChangeHandlerPulverization(input: string, value: any): void;
}

const OperationData: React.FC<OperationDataProps> = ({
  nextStep,
  type,
  onChangeHandlerPulverization,
  pulverization,
}) => {
  const [show, setShow] = useState(false);
  const [showPartial, setShowPartial] = useState(false);

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const onChange = (event: Event, selectedDate: Date | undefined): void => {
    const currentDate = selectedDate || pulverization.sampleDate;
    setShow(false);
    onChangeHandlerPulverization('sampleDate', currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const onChangePartial = (
    event: Event,
    selectedDate: Date | undefined,
  ): void => {
    const currentDate = selectedDate || pulverization.datePartial;
    setShowPartial(false);
    onChangeHandlerPulverization('datePartial', currentDate);
  };

  const showModePartial = () => {
    setShowPartial(true);
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header onPressCancel={() => console.log('cancelar')}>
          Dados da Operação
        </Header>
        <Container>
          <Card title="Dados da Operação">
            <CalendarContainer
              onPress={showMode}
              date={pulverization.sampleDate}
            />
            {show && (
              <Calendar
                testID="dateTimePicker"
                value={pulverization.sampleDate}
                display="default"
                onChange={onChange}
              />
            )}
          </Card>
          <Card title="Selecione o estádio da cultura">
            <PickerContainer>
              <Picker
                selectedValue={pulverization.growthPhase}
                onValueChange={(itemValue, itemIndex) =>
                  onChangeHandlerPulverization('growthPhase', itemValue)
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
          <Card title="Volume de calda (l/ha)">
            <Input
              onChangeText={value => {
                onChangeHandlerPulverization('caldaVolume', value);
              }}
              value={pulverization.caldaVolume}
              keyboardType="numeric"
            />
          </Card>
          <Card title="Pulverização Parcial?">
            <Buttons>
              <No
                onPress={() => {
                  onChangeHandlerPulverization('selected', false);
                }}
                flag={!pulverization.selected}
              >
                <NoText>Não</NoText>
              </No>
              <Yes
                onPress={() => {
                  onChangeHandlerPulverization('selected', true);
                }}
                flag={pulverization.selected}
              >
                <YesText>Sim</YesText>
              </Yes>
            </Buttons>
            {pulverization.selected && (
              <CalendarContainer
                onPress={showModePartial}
                date={pulverization.datePartial}
              />
            )}
            {showPartial && (
              <Calendar
                testID="datePartialTimePicker"
                value={pulverization.datePartial}
                display="default"
                onChange={onChangePartial}
              />
            )}
          </Card>
          {type === 'update' ? (
            <ButtonText size="large" color="green" onPress={next}>
              Próximo
            </ButtonText>
          ) : (
            <ButtonText size="large" color="green" onPress={next}>
              Próximo
            </ButtonText>
          )}
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default OperationData;
