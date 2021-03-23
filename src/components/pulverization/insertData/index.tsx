import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import Input from '../../input';

import { Container, Buttons, Cards } from './styles';

interface OperationDataProps {
  nextStep(): void;
  prevStep(): void;
}

const InsetData: React.FC<OperationDataProps> = ({ nextStep, prevStep }) => {
  const [teste1, setTeste1] = useState('0,0');
  const [teste2, setTeste2] = useState('0,0');

  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header onPressCancel={() => console.log('cancelar')}>
          Novo Produto
        </Header>
        <Container>
          <Cards>
            <Card title="Dosagem do Produto (Unidade/ha)">
              <Input
                onChangeText={value => {
                  setTeste1(value);
                }}
                value={teste1}
              />
            </Card>

            <Card title="Preço do produto (R$/Unidade)">
              <Input
                onChangeText={value => {
                  setTeste2(value);
                }}
                value={teste2}
              />
            </Card>
          </Cards>
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
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default InsetData;
