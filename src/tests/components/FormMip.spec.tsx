/* eslint-disable import/no-extraneous-dependencies */
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import FormMip from '../../components/mip/formMip';

const mockedNavigationBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedNavigationBack,
    }),
  };
});

describe('FormMip component', () => {
  it('should be able to to create a mip form with one of each', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <FormMip />,
    );

    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null, new Date('01 / 01 / 2001'));

    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonCancel'));
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    fireEvent(getByTestId('input-container'), 'focus');
    const anotherValue = getByTestId('mipSample-desfolhaAnotherValueInput');
    fireEvent.changeText(anotherValue, '10');
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonConfirm'));

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));
    fireEvent.press(getByText('Próximo'));

    const searchPest = getByPlaceholderText('Buscar por Praga');
    fireEvent.changeText(searchPest, 'Lagarta da Soja');

    fireEvent.press(getByTestId('Lagarta da Soja'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));

    const average = getByPlaceholderText('0,00');
    fireEvent.changeText(average, '2,5');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronDown'));
    fireEvent.press(getByTestId('Lagarta da Soja ChevronUp'));
    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholderText('Buscar por Doença');
    fireEvent.changeText(searchPestDiseases, 'Lagarta com Nomuraea');

    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd'),
    );

    const averagePestDiseases = getByPlaceholderText('0,00');
    fireEvent.changeText(averagePestDiseases, '2,0');
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

    const searchNaturalPredator = getByPlaceholderText(
      'Buscar por Inimigo Natural',
    );
    fireEvent.changeText(searchNaturalPredator, 'Lagarta com Baculovirus');
    fireEvent.press(
      getByTestId('naturalPredatorOccurrence-naturalPredatorItemButtonAdd'),
    );

    const averageNaturalPredator = getByPlaceholderText('0,00');
    fireEvent.changeText(averageNaturalPredator, '3,0');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm',
      ),
    );

    fireEvent.changeText(averageNaturalPredator, 'Lagarta da soja');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonCancel',
      ),
    );

    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '1 / 1 / 2001',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^10%$/);

    expect(getByTestId('revision-pestItemSize')).toHaveTextContent('< 1,5 cm');
    expect(getByTestId('revision-pestItemAverage')).toHaveTextContent(/^2,5$/);

    fireEvent.press(getByTestId('revision-flagPestDiseasesButton'));
    expect(getByTestId('revision-pestDiseaseItemAverage')).toHaveTextContent(
      /^2,0$/,
    );

    fireEvent.press(getByTestId('revision-flagNaturalPredatorButton'));
    expect(
      getByTestId('revision-naturalPredatorItemAverage'),
    ).toHaveTextContent(/^3,0$/);

    fireEvent.press(getByTestId('revision-saveButtonFormMip'));
  });

  it('should to be able create a mip form with one of each && two sizes pestOccurrence', () => {
    const {
      getByText,
      getByTestId,
      getByPlaceholderText,
      getAllByTestId,
    } = render(<FormMip />);

    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null);

    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    fireEvent.press(getByTestId('mipSample-desfolhaZeroValue'));
    fireEvent.press(getByTestId('mipSample-desfolhaOneValue'));
    fireEvent.press(getByTestId('mipSample-desfolhaFiveValue'));

    fireEvent.press(getByText('Próximo'));

    const searchPest = getByPlaceholderText('Buscar por Praga');
    fireEvent.changeText(searchPest, 'Lagarta da Soja');

    fireEvent.press(getByTestId('Lagarta da Soja'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeBigger'));

    const average = getByPlaceholderText('0,00');
    fireEvent.changeText(average, '2,5');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronDown'));

    fireEvent.press(getByTestId('Lagarta da Soja add other size'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));
    fireEvent.changeText(average, '1,5');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronUp'));

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));
    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholderText('Buscar por Doença');
    fireEvent.changeText(searchPestDiseases, 'Lagarta com Nomuraea');

    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd'),
    );

    const averagePestDiseases = getByPlaceholderText('0,00');
    fireEvent.changeText(averagePestDiseases, '2,0');
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

    const searchNaturalPredator = getByPlaceholderText(
      'Buscar por Inimigo Natural',
    );
    fireEvent.changeText(searchNaturalPredator, 'Lagarta com Baculovirus');
    fireEvent.press(
      getByTestId('naturalPredatorOccurrence-naturalPredatorItemButtonAdd'),
    );

    const averageNaturalPredator = getByPlaceholderText('0,00');
    fireEvent.changeText(averageNaturalPredator, '3,0');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm',
      ),
    );

    fireEvent.changeText(averageNaturalPredator, 'Lagarta da soja');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonCancel',
      ),
    );

    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^5%$/);

    expect(getAllByTestId('revision-pestItemSize')[0]).toHaveTextContent(
      '> 1,5 cm',
    );
    expect(getAllByTestId('revision-pestItemSize')[1]).toHaveTextContent(
      '< 1,5 cm',
    );
    expect(getAllByTestId('revision-pestItemAverage')[0]).toHaveTextContent(
      /^2,5$/,
    );
    expect(getAllByTestId('revision-pestItemAverage')[1]).toHaveTextContent(
      /^1,5$/,
    );

    fireEvent.press(getByTestId('revision-flagPestDiseasesButton'));
    expect(getByTestId('revision-pestDiseaseItemAverage')).toHaveTextContent(
      /^2,0$/,
    );

    fireEvent.press(getByTestId('revision-flagNaturalPredatorButton'));
    expect(
      getByTestId('revision-naturalPredatorItemAverage'),
    ).toHaveTextContent(/^3,0$/);

    fireEvent.press(getByTestId('revision-flagPestButton'));

    fireEvent.press(getByTestId('revision-saveButtonFormMip'));
  });

  it('should be able to to create a mip form with two of each', () => {
    const {
      getByText,
      getByTestId,
      getByPlaceholderText,
      getAllByTestId,
    } = render(<FormMip />);

    fireEvent.press(getByTestId('calendar-container'));
    const calendarElement = getByTestId('mipSample-sampleDateCalendar');
    fireEvent(calendarElement, 'onChange', null, new Date('01 / 01 / 2001'));

    const picker = getByTestId('mipSample-growthPhasePicker');
    fireEvent(picker, 'onValueChange', 'V1');

    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValue'));

    fireEvent(getByTestId('input-container'), 'focus');
    const anotherValue = getByTestId('mipSample-desfolhaAnotherValueInput');
    fireEvent.changeText(anotherValue, '25');
    fireEvent.press(getByTestId('mipSample-desfolhaAnotherValueButtonConfirm'));

    fireEvent.press(getByText('Próximo'));

    const searchPest = getByPlaceholderText('Buscar por Praga');
    fireEvent.changeText(searchPest, 'Lagarta da Soja');

    fireEvent.press(getByTestId('Lagarta da Soja'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemSizeSmall'));

    const average = getByPlaceholderText('0,00');
    fireEvent.changeText(average, '1,8');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Lagarta da Soja ChevronDown'));
    fireEvent.press(getByTestId('Lagarta da Soja ChevronUp'));

    fireEvent.changeText(searchPest, 'Percevejo');

    fireEvent.press(getByTestId('Percevejo'));

    fireEvent.press(getByTestId('pestOccurrence-pestItemPercevejoSizeSmall'));
    fireEvent.press(getByTestId('pestOccurrence-pestItemPercevejoSizeBigger'));

    fireEvent.changeText(average, '5,2');
    fireEvent.press(getByTestId('pestOccurrence-pestItemAverageButtonConfirm'));

    fireEvent.press(getByTestId('Percevejo ChevronDown'));
    fireEvent.press(getByTestId('Percevejo ChevronUp'));

    fireEvent.press(getByText('Próximo'));

    const searchPestDiseases = getByPlaceholderText('Buscar por Doença');
    fireEvent.changeText(searchPestDiseases, 'Lagarta com Nomuraea');

    fireEvent.press(
      getByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd'),
    );

    const averagePestDiseases = getByPlaceholderText('0,00');
    fireEvent.changeText(averagePestDiseases, '4,2');
    fireEvent.press(
      getByTestId(
        'pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm',
      ),
    );

    fireEvent.press(
      getAllByTestId('pestDiseasesOccurrence-pestDiseasesItemButtonAdd')[0],
    );

    fireEvent.changeText(averagePestDiseases, '1,5');
    fireEvent.press(
      getByTestId(
        'pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm',
      ),
    );

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));
    fireEvent.press(getByText('Próximo'));

    const searchNaturalPredator = getByPlaceholderText(
      'Buscar por Inimigo Natural',
    );
    fireEvent.changeText(searchNaturalPredator, 'Lagarta com Baculovirus');
    fireEvent.press(
      getByTestId('naturalPredatorOccurrence-naturalPredatorItemButtonAdd'),
    );

    const averageNaturalPredator = getByPlaceholderText('0,00');
    fireEvent.changeText(averageNaturalPredator, '3,0');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm',
      ),
    );

    fireEvent.press(
      getAllByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemButtonAdd',
      )[0],
    );

    fireEvent.changeText(averageNaturalPredator, '0,8');
    fireEvent.press(
      getByTestId(
        'naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm',
      ),
    );

    fireEvent.press(getByText('Próximo'));
    fireEvent.press(getByText('Anterior'));
    fireEvent.press(getByText('Próximo'));

    expect(getByTestId('revision-sampleDate')).toHaveTextContent(
      '1 / 1 / 2001',
    );
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-desfolha')).toHaveTextContent(/^20%$/);

    expect(getAllByTestId('revision-pestItemSize')[0]).toHaveTextContent(
      '< 1,5 cm',
    );
    expect(getAllByTestId('revision-pestItemAverage')[0]).toHaveTextContent(
      /^1,8$/,
    );
    expect(getAllByTestId('revision-pestItemSize')[1]).toHaveTextContent(
      'Adultos',
    );
    expect(getAllByTestId('revision-pestItemAverage')[1]).toHaveTextContent(
      /^5,2/,
    );

    fireEvent.press(getByTestId('revision-flagPestDiseasesButton'));

    expect(
      getAllByTestId('revision-pestDiseaseItemAverage')[0],
    ).toHaveTextContent(/^1,5$/);
    expect(
      getAllByTestId('revision-pestDiseaseItemAverage')[1],
    ).toHaveTextContent(/^4,2/);

    fireEvent.press(getByTestId('revision-flagNaturalPredatorButton'));

    expect(
      getAllByTestId('revision-naturalPredatorItemAverage')[0],
    ).toHaveTextContent(/^3,0$/);
    expect(
      getAllByTestId('revision-naturalPredatorItemAverage')[1],
    ).toHaveTextContent(/^0,8/);

    fireEvent.press(getByTestId('revision-saveButtonFormMip'));
  });
});
