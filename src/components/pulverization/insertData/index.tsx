import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useCallback, useState } from 'react';
import { View, Alert, Modal } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import Input from '../../input';

import {
  Container,
  Buttons,
  Cards,
  CenteredView,
  ModalView,
  HeaderView,
  BodyView,
  ModalText,
  ButtonsYesNo,
  No,
  Yes,
  NoText,
  YesText,
} from './styles';

interface OperationDataProps {
  nextYes(): void;
  nextNo(): void;
  prevStep(): void;
  product: {
    classe: string;
    name: string;
    target: string;
    dose: string;
    productPrice: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeHandlerProduct(input: string, value: any): void;
}

const InsetData: React.FC<OperationDataProps> = ({
  nextYes,
  nextNo,
  prevStep,
  product,
  onChangeHandlerProduct,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header>Novo Produto</Header>
        <Container>
          <Cards>
            <Card title="Dosagem do Produto (Unidade/ha)">
              <Input
                onChangeText={value => {
                  onChangeHandlerProduct('dose', value);
                }}
                value={product.dose}
                keyboardType="numeric"
                placeholder="0,0"
              />
            </Card>

            <Card title="Preço do produto (R$/Unidade)">
              <Input
                onChangeText={value => {
                  onChangeHandlerProduct('productPrice', value);
                }}
                value={product.productPrice}
                keyboardType="numeric"
                placeholder="0,0"
              />
            </Card>
          </Cards>
          <Modal
            animationType="fade"
            visible={modalVisible}
            transparent
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <CenteredView>
              <ModalView>
                <HeaderView>
                  <ModalText>Adicionar mais um produto</ModalText>
                </HeaderView>
                <BodyView>
                  <ButtonsYesNo>
                    <No onPress={nextNo}>
                      <NoText>Não</NoText>
                    </No>
                    <Yes onPress={nextYes}>
                      <YesText>Sim</YesText>
                    </Yes>
                  </ButtonsYesNo>
                </BodyView>
              </ModalView>
            </CenteredView>
          </Modal>
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
              onPress={() => setModalVisible(true)}
              style={{ marginLeft: 4 }}
              disable={!product.dose || !product.productPrice}
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
