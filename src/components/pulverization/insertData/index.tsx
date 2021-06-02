import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useCallback, useState } from 'react';
import { View, Modal } from 'react-native';
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

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
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
      <View testID="insert-data">
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
                {...testProps('insertData-doseInput')}
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
                {...testProps('insertData-productPriceInput')}
              />
            </Card>
          </Cards>
          <Modal
            testID="modal"
            animationType="fade"
            visible={modalVisible}
            transparent
          >
            <CenteredView>
              <ModalView>
                <HeaderView>
                  <ModalText>Adicionar mais um produto</ModalText>
                </HeaderView>
                <BodyView>
                  <ButtonsYesNo>
                    <No onPress={nextNo} {...testProps('insertData-noButton')}>
                      <NoText>Não</NoText>
                    </No>
                    <Yes
                      onPress={nextYes}
                      {...testProps('insertData-yesButton')}
                    >
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
              {...testProps('button-prev')}
            >
              Anterior
            </ButtonText>
            <ButtonText
              size="small"
              color="green"
              onPress={() => setModalVisible(true)}
              style={{ marginLeft: 4 }}
              disable={!product.dose || !product.productPrice}
              {...testProps('insertData-nextButton')}
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
