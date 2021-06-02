import React, { useCallback, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProgressChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import iconCalendar from '../../../assets/icon_calendar.png';
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
  Desfolha,
  DesfolhaText,
  LabelCultureStage,
  LabelDesfolha,
  Buttons,
  ItemListTextTable,
  HeaderList,
  Lines,
  LineTable,
  Table,
  ItemListImage,
  ButtonsHeader,
} from './styles';
import ButtonIcon from '../../buttonIcon';

const screenWidth = Dimensions.get('window').width;

interface SampleMipProps {
  prevStep(): void;
  sampleData: ISampleData;
  pests: IPest[];
  pestsDiseases: IPestDiseases[];
  naturalsPredator: INaturalPredator[];
}

interface ISampleData {
  sampleDate: Date;
  growthPhase: string;
  desfolha: string;
}

interface Occurrence {
  size: string;
  average: string;
}

interface IPest {
  id: string;
  type: string;
  image: string;
  name: string;
  occurrence: Occurrence[];
}

interface IPestDiseases {
  id: string;
  image: string;
  name: string;
  average: string;
}

interface INaturalPredator {
  id: string;
  image: string;
  name: string;
  average: string;
}

const Revision: React.FC<SampleMipProps> = ({
  prevStep,
  sampleData,
  pests,
  pestsDiseases,
  naturalsPredator,
}) => {
  const [flagPest, setFlagPest] = useState(true);
  const [flagPestDiseases, setFlagPestDiseases] = useState(false);
  const [flagNaturalPredator, setFlagNaturalPredator] = useState(false);
  const navigation = useNavigation();

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(11, 156, 49, ${opacity})`,
  };

  const data = {
    data: [Number(sampleData.desfolha) / 20],
  };

  function testProps(id: string) {
    return { testID: id, accessibilityLabel: id };
  }

  return (
    <KeyboardAwareScrollView>
      <View>
        <Header>Revisão</Header>
        <Container>
          <Card title="Dados da Amostragem">
            <DateOperation>
              <ImageDateOperation source={iconCalendar} />
              <TextDateOperation testID="revision-sampleDate">
                {sampleData.sampleDate.getDate()} /{' '}
                {sampleData.sampleDate.getMonth() + 1} /{' '}
                {sampleData.sampleDate.getFullYear()}
              </TextDateOperation>
            </DateOperation>
            <Data>
              <CultureStage>
                <ImageCultureStage source={leaf} />
                <CultureStageText {...testProps('revision-growthPhase')}>
                  {sampleData.growthPhase}
                </CultureStageText>
                <LabelCultureStage>Cultura</LabelCultureStage>
              </CultureStage>
              <Desfolha>
                <ProgressChart
                  data={data}
                  width={screenWidth}
                  height={90}
                  strokeWidth={14}
                  radius={32}
                  chartConfig={chartConfig}
                  hideLegend
                />
                <DesfolhaText {...testProps('revision-desfolha')}>
                  {sampleData.desfolha}%
                </DesfolhaText>
                <LabelDesfolha>Desfolha</LabelDesfolha>
              </Desfolha>
            </Data>
          </Card>
          <Card title="Ocorrências">
            <ButtonsHeader>
              <ButtonIcon
                {...testProps('revision-flagPestButton')}
                icon="bug"
                colorIcon="black"
                size="large"
                color={flagPest ? 'green' : 'gray'}
                onPress={() => {
                  setFlagPest(true);
                  setFlagPestDiseases(false);
                  setFlagNaturalPredator(false);
                }}
              />
              <ButtonIcon
                {...testProps('revision-flagPestDiseasesButton')}
                icon="notes-medical"
                colorIcon="black"
                size="large"
                color={flagPestDiseases ? 'green' : 'gray'}
                onPress={() => {
                  setFlagPest(false);
                  setFlagPestDiseases(true);
                  setFlagNaturalPredator(false);
                }}
              />
              <ButtonIcon
                {...testProps('revision-flagNaturalPredatorButton')}
                icon="spider"
                colorIcon="black"
                size="large"
                color={flagNaturalPredator ? 'green' : 'gray'}
                onPress={() => {
                  setFlagPest(false);
                  setFlagPestDiseases(false);
                  setFlagNaturalPredator(true);
                }}
              />
            </ButtonsHeader>
            {flagPest && (
              <Table>
                <Lines style={{ marginTop: 12 }}>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                  <LineTable bgColor={false} />
                </Lines>
                <HeaderList>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Praga</ItemListTextTable>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Tamanho</ItemListTextTable>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Média</ItemListTextTable>
                  </View>
                </HeaderList>
                <Lines>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                  <LineTable bgColor={false} />
                </Lines>
                {pests.map(pest => {
                  return (
                    <View
                      {...testProps('revision-pestOccurrence')}
                      key={pest.id}
                      style={{ flex: 1 }}
                    >
                      {pest.occurrence.length !== 0 && (
                        <>
                          <HeaderList>
                            <ItemListImage
                              source={{ uri: pest.image }}
                              style={{ flex: 1 }}
                            />
                            <View
                              style={{
                                flex: 2,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                              }}
                            >
                              {pest.occurrence.map(occurrence => {
                                return (
                                  <View
                                    {...testProps(
                                      'revision-pestOccurrenceItem',
                                    )}
                                    key={`${occurrence.size}${Math.random()}`}
                                    style={{ flexDirection: 'row' }}
                                  >
                                    <View
                                      style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <ItemListTextTable
                                        {...testProps(`revision-pestItemSize`)}
                                      >
                                        {occurrence.size}
                                      </ItemListTextTable>
                                    </View>
                                    <View
                                      style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <ItemListTextTable
                                        {...testProps(
                                          `revision-pestItemAverage`,
                                        )}
                                      >
                                        {occurrence.average}
                                      </ItemListTextTable>
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </HeaderList>
                          <LineTable bgColor={false} />
                        </>
                      )}
                    </View>
                  );
                })}
              </Table>
            )}
            {flagPestDiseases && (
              <Table>
                <Lines style={{ marginTop: 12 }}>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                </Lines>
                <HeaderList>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Doenças</ItemListTextTable>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Média</ItemListTextTable>
                  </View>
                </HeaderList>
                <Lines>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                </Lines>
                {pestsDiseases.map(pestDiseases => {
                  return (
                    <View
                      {...testProps('revision-pestDiseasesOccurrence')}
                      key={pestDiseases.id}
                      style={{ flex: 1 }}
                    >
                      {pestDiseases.average !== '' ? (
                        <>
                          <HeaderList>
                            <ItemListImage
                              source={{ uri: pestDiseases.image }}
                            />
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <ItemListTextTable
                                {...testProps(
                                  'revision-pestDiseaseItemAverage',
                                )}
                              >
                                {pestDiseases.average}
                              </ItemListTextTable>
                            </View>
                          </HeaderList>
                          <LineTable bgColor={false} />
                        </>
                      ) : null}
                    </View>
                  );
                })}
              </Table>
            )}
            {flagNaturalPredator && (
              <Table>
                <Lines style={{ marginTop: 12 }}>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                </Lines>
                <HeaderList>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Inimigo Natural</ItemListTextTable>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>Média</ItemListTextTable>
                  </View>
                </HeaderList>
                <Lines>
                  <LineTable bgColor={false} />
                  <LineTable bgColor />
                </Lines>
                {naturalsPredator.map(naturalPredator => {
                  return (
                    <View
                      {...testProps('revision-naturalPredatorOccurrence')}
                      key={naturalPredator.id}
                      style={{ flex: 1 }}
                    >
                      {naturalPredator.average !== '' ? (
                        <>
                          <HeaderList>
                            <ItemListImage
                              source={{ uri: naturalPredator.image }}
                            />

                            <View
                              style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <ItemListTextTable
                                {...testProps(
                                  'revision-naturalPredatorItemAverage',
                                )}
                              >
                                {naturalPredator.average}
                              </ItemListTextTable>
                            </View>
                          </HeaderList>
                          <LineTable bgColor={false} />
                        </>
                      ) : null}
                    </View>
                  );
                })}
              </Table>
            )}
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
              onPress={() => {
                navigation.goBack();
              }}
              style={{ marginLeft: 4 }}
              {...testProps('revision-saveButtonFormMip')}
            >
              Salvar
            </ButtonText>
          </Buttons>
        </Container>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Revision;
