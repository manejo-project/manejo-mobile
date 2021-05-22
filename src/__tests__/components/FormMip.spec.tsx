import React from 'react';

import { fireEvent, render } from 'react-native-testing-library';
import FormMip from '../../components/mip/formMip';
import '@testing-library/jest-native/extend-expect';

const mockedNavigationBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedNavigationBack,
    }),
  };
});

describe('FormMip component', () => {
  it('should be able to to create a MipSample with five value desfolha', () => {
    const { getByText, getByTestId } = render(<FormMip />);

    // Calendar component
    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null, new Date('01 / 01 / 2001'));

    // Picker component
    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    // Desfolha component
    fireEvent.press(getByTestId('mipSample-desfolhaZeroValue'));
    fireEvent.press(getByTestId('mipSample-desfolhaOneValue'));
    fireEvent.press(getByTestId('mipSample-desfolhaFiveValue'));

    // Comparing mipSample with Revision
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '1 / 1 / 2001',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^5%$/);
  });

  it('should be able to create a MipSample with another value desfolha', () => {
    const { getByText, getByTestId } = render(<FormMip />);

    // Calendar component
    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null, new Date('01 / 01 / 2001'));

    // Picker component
    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    // Desfolha component
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    // Another Value Input
    fireEvent(getByTestId('input-container'), 'focus');
    const anotherValue = getByTestId('mipSample-desfolhaAnotherValueInput');
    fireEvent.changeText(anotherValue, '8,5');
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonConfirm'));

    // Comparing mipSample with Revision
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '1 / 1 / 2001',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^8,5%$/);
  });

  it('should be able to to create a MipSample with another value max 20 desfolha', () => {
    const { getByText, getByTestId } = render(<FormMip />);

    // Calendar component
    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null, new Date('01 / 01 / 2001'));

    // Picker component
    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    // Desfolha component
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    // Another Value Input
    fireEvent(getByTestId('input-container'), 'focus');
    const anotherValue = getByTestId('mipSample-desfolhaAnotherValueInput');
    fireEvent.changeText(anotherValue, '25');
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonConfirm'));

    // Comparing mipSample with Revision
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '1 / 1 / 2001',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^20%$/);
  });

  it('should be able to create a MipSample with Calendar Default', () => {
    const { getByText, getByTestId } = render(<FormMip />);

    // Calendar component
    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null);

    // Picker component
    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    // Desfolha component
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    // Another Value Input
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonCancel'));

    // Comparing mipSample with Revision
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '22 / 5 / 2021',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^0%$/);
  });

  it('should be able to click previous of formMip', () => {
    const { getByText } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));

    expect(getByText('Dados da Amostragem')).toBeTruthy();

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));

    expect(getByText('Flutuação das Pragas')).toBeTruthy();

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));

    expect(getByText('Doenças das Pragas')).toBeTruthy();

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));

    expect(getByText('Inimigos Naturais')).toBeTruthy();
  });

  it('should be able to create a PestOccurrence for caterpillar', () => {
    const { getByText, getByTestId, getByPlaceholder } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholder('Buscar por Praga');
    fireEvent.changeText(searchPestDiseases, 'Lagarta da Soja');

    fireEvent.press(getByTestId('Lagarta da Soja'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeBigger'));
    const average = getByPlaceholder('0,00');
    fireEvent.changeText(average, '2,0');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronDown'));
    fireEvent.press(getByTestId('Lagarta da Soja ChevronUp'));

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagPestButton'));
    expect(getByTestId('> 1,5 cm revision-pestItemSize')).toHaveTextContent(
      '> 1,5 cm',
    );
    expect(getByTestId('2,0 revision-pestItemAverage')).toHaveTextContent(
      /^2,0$/,
    );
  });

  it('should be able to create a PestOccurrence for two sizes caterpillars', () => {
    const { getByText, getByTestId, getByPlaceholder } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholder('Buscar por Praga');
    fireEvent.changeText(searchPestDiseases, 'Lagarta da Soja');

    fireEvent.press(getByTestId('Lagarta da Soja'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeBigger'));
    const average = getByPlaceholder('0,00');
    fireEvent.changeText(average, '2,0');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronDown'));
    fireEvent.press(getByTestId('Lagarta da Soja add other size'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));
    fireEvent.changeText(average, '2,5');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronUp'));

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagPestButton'));
    expect(getByTestId('> 1,5 cm revision-pestItemSize')).toHaveTextContent(
      '> 1,5 cm',
    );
    expect(getByTestId('< 1,5 cm revision-pestItemSize')).toHaveTextContent(
      '< 1,5 cm',
    );
    expect(getByTestId('2,0 revision-pestItemAverage')).toHaveTextContent(
      /^2,0$/,
    );
    expect(getByTestId('2,5 revision-pestItemAverage')).toHaveTextContent(
      /^2,5$/,
    );
  });

  it('should be able to create a PestOccurrence for bedbug', () => {
    const { getByText, getByTestId, getByPlaceholder } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholder('Buscar por Praga');
    fireEvent.changeText(searchPestDiseases, 'Percevejo');

    fireEvent.press(getByTestId('Percevejo'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemPercevejoSizeBigger'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemPercevejoSizeSmall'));
    const average = getByPlaceholder('0,00');
    fireEvent.changeText(average, '2,0');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Percevejo ChevronDown'));
    fireEvent.press(getByTestId('Percevejo ChevronUp'));

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagPestButton'));
    expect(
      getByTestId('3º ao 5º instar revision-pestItemSize'),
    ).toHaveTextContent('3º ao 5º instar');
    expect(getByTestId('2,0 revision-pestItemAverage')).toHaveTextContent(
      /^2,0$/,
    );
  });

  it('should be able to create a PestDiseasesOccurrence', () => {
    const { getByText, getByTestId, getByPlaceholder } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholder('Buscar por Doença');
    fireEvent.changeText(searchPestDiseases, 'Lagarta com Nomuraea');

    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd'),
    );

    const average = getByPlaceholder('0,00');
    fireEvent.changeText(average, '2,0');
    fireEvent.press(
      getByTestId(
        'pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm',
      ),
    );

    fireEvent.changeText(searchPestDiseases, 'Lagarta da soja');
    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd'),
    );
    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemAverageButtonCancel'),
    );

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagPestDiseasesButton'));
    expect(getByTestId('revision-pestDiseaseItemAverage')).toHaveTextContent(
      /^2,0$/,
    );
  });

  it('should be able to create a NaturalPredatorOccurrence', () => {
    const { getByText, getByPlaceholder, getByTestId } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholder('Buscar por Inimigo Natural');
    fireEvent.changeText(searchPestDiseases, 'Lagarta com Baculovirus');

    fireEvent.press(
      getByTestId('naturalPredatorOccurrence-naturalPredatorItemButtonAdd'),
    );

    const average = getByPlaceholder('0,00');
    fireEvent.changeText(average, '3,0');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm',
      ),
    );

    fireEvent.changeText(searchPestDiseases, 'Lagarta da soja');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonCancel',
      ),
    );

    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagNaturalPredatorButton'));
    expect(
      getByTestId('revision-naturalPredatorItemAverage'),
    ).toHaveTextContent(/^3,0$/);
  });

  it('should be able to create a Revision', () => {
    const { getByText, getByTestId } = render(<FormMip />);

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Próximo'));

    fireEvent.press(getByTestId('revision-flagPestDiseasesButton'));
    fireEvent.press(getByTestId('revision-flagNaturalPredatorButton'));
    fireEvent.press(getByTestId('revision-flagPestButton'));

    fireEvent.press(getByText('Salvar'));

    expect(mockedNavigationBack).toHaveBeenCalled();

    expect(getByText('Revisão')).toBeTruthy();
  });
});
