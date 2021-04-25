import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
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

interface Props {
  edit(): void;
  newProduct(): void;
  pulverization: {
    growthPhase: string;
    selected: boolean;
    caldaVolume: string;
    sampleDate: Date;
    datePartial: Date;
  };
  products: {
    classe: string;
    name: string;
    target: string;
    dose: string;
    productPrice: string;
  }[];
}

export interface Product {
  name: string;
}

const Revision: React.FC<Props> = ({
  pulverization,
  products,
  edit,
  newProduct,
}) => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View>
        <Header>Revisão</Header>
        <Container>
          <Card title="Operação" edit={edit}>
            <DateOperation>
              <ImageDateOperation source={iconCalendar} />
              <TextDateOperation>
                {pulverization.sampleDate.getDate()} /{' '}
                {pulverization.sampleDate.getMonth() + 1} /{' '}
                {pulverization.sampleDate.getFullYear()}
              </TextDateOperation>
            </DateOperation>
            <Data>
              <CultureStage>
                <ImageCultureStage source={leaf} />
                <CultureStageText>{pulverization.growthPhase}</CultureStageText>
                <LabelCultureStage>Cultura</LabelCultureStage>
              </CultureStage>
              <Volume>
                <ImageVolume source={drop} />
                <VolumeText>{pulverization.caldaVolume}</VolumeText>
                <LabelVolume>Volume de Calda (l/ha)</LabelVolume>
              </Volume>
            </Data>
            {pulverization.selected && (
              <DatePartial>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ImageDatePartial source={iconCalendar} />
                  <TextDatePartial>
                    {pulverization.datePartial.getDate()} /{' '}
                    {pulverization.datePartial.getMonth() + 1} /{' '}
                    {pulverization.datePartial.getFullYear()}
                  </TextDatePartial>
                </View>
                <LabelDatePartial>Pulverização Parcial</LabelDatePartial>
              </DatePartial>
            )}
          </Card>
          <Card title="Produtos Usados">
            <ButtonText
              size="small"
              color="green"
              onPress={newProduct}
              style={{ marginTop: 0 }}
            >
              + Novo Produto
            </ButtonText>

            <Section>
              <SectionText>Herbicida</SectionText>
            </Section>
            {products.map(product => {
              return (
                <Card
                  key={product.name}
                  color="beige"
                  title={product.name}
                  // eslint-disable-next-line no-console
                  remove={() => console.log('remover')}
                >
                  <TargetContainer>
                    <Feather name="target" color="#D14A61" size={40} />

                    <TextTarget>{product.target}</TextTarget>
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
                      <TextData>{product.dose}</TextData>
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
                      <TextData>R$ {product.productPrice}</TextData>
                    </ContainerData>
                  </View>
                </Card>
              );
            })}
          </Card>

          <ButtonText
            size="large"
            color="green"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Salvar
          </ButtonText>
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Revision;
