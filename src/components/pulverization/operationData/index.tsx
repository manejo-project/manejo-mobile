/* eslint-disable @typescript-eslint/no-unused-vars */
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import PickerContainer from '../../pickerContainer';
import Input from '../../input';

import { Container, Buttons, No, Yes, NoText, YesText } from './styles';
import CalendarContainer from '../../calendarContainer';

interface OperationDataProps {
  nextStep(): void;
}

const OperationData: React.FC<OperationDataProps> = ({ nextStep }) => {
  const [selected, setSelected] = useState();
  const [selectedNo, setSelectedNo] = useState(false);
  const [selectedYes, setSelectedYes] = useState(false);
  const [teste, setTeste] = useState('0,0');

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header onPressCancel={() => console.log('cancelar')}>
          Dados da Operação
        </Header>
        <Container>
          <Card title="Dados da Operação">
            <CalendarContainer date={new Date()} />
          </Card>
          <Card title="Selecione o estádio da cultura">
            <PickerContainer>
              <Picker
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
              >
                <Picker.Item label="V4" value="v4" />
                <Picker.Item label="V5" value="v5" />
              </Picker>
            </PickerContainer>
          </Card>
          <Card title="Volume de calda (l/ha)">
            <Input
              onChangeText={value => {
                setTeste(value);
              }}
              value={teste}
            />
          </Card>
          <Card title="Pulverização Parcial?">
            <Buttons>
              <No
                onPress={() => {
                  setSelectedNo(true);
                  setSelectedYes(false);
                }}
                flag={selectedNo}
              >
                <NoText>Não</NoText>
              </No>
              <Yes
                onPress={() => {
                  setSelectedYes(true);
                  setSelectedNo(false);
                }}
                flag={selectedYes}
              >
                <YesText>Sim</YesText>
              </Yes>
            </Buttons>
            {selectedYes && <CalendarContainer date={new Date()} />}
          </Card>
          <ButtonText size="large" color="green" onPress={next}>
            Próximo
          </ButtonText>
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default OperationData;
