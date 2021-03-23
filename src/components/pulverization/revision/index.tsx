import React, { useCallback } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import iconCalendar from '../../../assets/icon_calendar.png';
import drop from '../../../assets/drop.png';
import leaf from '../../../assets/leaf.png';
import {
  Container,
  DateOperation,
  ImageDateOperation,
  TextDateOperation,
  Data,
  CultureStage,
  ImageCultureStage,
  CultureStageText,
  Volume,
  ImageVolume,
  VolumeText,
  DatePartial,
  ImageDatePartial,
  TextDatePartial,
  LabelDatePartial,
  LabelCultureStage,
  LabelVolume,
  ContainerData,
  HeaderData,
  LabelData,
  TextData,
  TargetContainer,
  TextTarget,
  Section,
  SectionText,
} from './styles';

interface PickerProps {
  nextStep(): void;
  prevStep(): void;
}

export interface Product {
  name: string;
}

const Revision: React.FC<PickerProps> = ({ nextStep, prevStep }) => {
  const next = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header onPressCancel={() => console.log('cancelar')}>Revisão</Header>
        <Container>
          <Card title="Operação" edit={() => console.log('editar')}>
            <DateOperation>
              <ImageDateOperation source={iconCalendar} />
              <TextDateOperation>17/02/2021</TextDateOperation>
            </DateOperation>
            <Data>
              <CultureStage>
                <ImageCultureStage source={leaf} />
                <CultureStageText>V3</CultureStageText>
                <LabelCultureStage>Cultura</LabelCultureStage>
              </CultureStage>
              <Volume>
                <ImageVolume source={drop} />
                <VolumeText>165</VolumeText>
                <LabelVolume>Volume de Calda (l/ha)</LabelVolume>
              </Volume>
            </Data>
            <DatePartial>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ImageDatePartial source={iconCalendar} />
                <TextDatePartial>17/02/2021</TextDatePartial>
              </View>
              <LabelDatePartial>Pulverização Parcial</LabelDatePartial>
            </DatePartial>
          </Card>
          <Card title="Produtos Usados">
            <ButtonText
              size="small"
              color="green"
              onPress={next}
              style={{ marginTop: 0 }}
            >
              + Novo Produto
            </ButtonText>

            <Section>
              <SectionText>Herbicida</SectionText>
            </Section>

            <Card
              color="beige"
              title="Round Wg (KG)"
              remove={() => console.log('remover')}
            >
              <TargetContainer>
                <Feather name="target" color="#D14A61" size={40} />

                <TextTarget>Folhas Largas (Pós-Emergencia)</TextTarget>
              </TargetContainer>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <ContainerData>
                  <HeaderData>
                    <Ionicons name="eyedrop" color="#FFC042" size={35} />
                    <LabelData>Dose</LabelData>
                  </HeaderData>
                  <TextData>0,82</TextData>
                </ContainerData>
                <ContainerData>
                  <HeaderData>
                    <MaterialCommunityIcons
                      name="cash"
                      color="#26E7A6"
                      size={40}
                    />
                    <LabelData>Preço</LabelData>
                  </HeaderData>
                  <TextData>R$ 60,00</TextData>
                </ContainerData>
              </View>
            </Card>
          </Card>

          <ButtonText size="large" color="green" onPress={prev}>
            Salvar
          </ButtonText>
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Revision;
