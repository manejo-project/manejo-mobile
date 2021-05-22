import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import Card from '../../components/card';
import FormPulverization from '../../components/pulverization/formPulverization';

const mockOnPress = jest.fn();
const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});

describe('FormPulverization component', () => {
  beforeEach(() => {
    mockOnPress.mockClear();
  });
  it('should be able to do a pulverization sample with one product', () => {
    const { getByTestId, getAllByTestId, getByText } = render(
      <FormPulverization />,
    );

    fireEvent(getAllByTestId('calendar-container')[0], 'press');
    fireEvent(
      getByTestId('operationData-dateTimePicker'),
      'onChange',
      null,
      new Date('02/02/2002'),
    );

    fireEvent(
      getByTestId('operationData-growthPhasePicker'),
      'onValueChange',
      'V1',
    );
    fireEvent.changeText(getByTestId('operationData-caldaVolumeInput'), '2');

    fireEvent(getByTestId('operationData-yesButton'), 'press');
    fireEvent(getAllByTestId('calendar-container')[1], 'press');
    fireEvent(
      getByTestId('operationData-datePartialTimePicker'),
      'onChange',
      null,
      new Date('01/01/2001'),
    );
    fireEvent(getByTestId('operationData-nextButton-create'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-FerrugemAsiática'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREVINIL(G)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    let productName;

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (p.props.title === 'PREVINIL (G)') {
          productName = p.props.title;
        }
      });

    expect(getByTestId('revision-sampleDate').children).toStrictEqual([
      '2',
      ' /',
      ' ',
      '2',
      ' /',
      ' ',
      '2002',
    ]);
    expect(getByTestId('revision-growthPhase')).toHaveTextContent(/^V1$/);
    expect(getByTestId('revision-volume').children[0]).toBe('2');
    expect(getByTestId('revision-datePartial').children).toStrictEqual([
      '1',
      ' /',
      ' ',
      '1',
      ' /',
      ' ',
      '2001',
    ]);
    expect(productName).toBe('PREVINIL (G)');

    fireEvent(getByText('Salvar'), 'press');
    expect(mockedGoBack).toHaveBeenCalled();
  });

  it('should be able to do a pulverization sample with two products', () => {
    const { getByTestId } = render(<FormPulverization />);

    const caldaVolumeInput = getByTestId('operationData-caldaVolumeInput');
    const nextButtonCreate = getByTestId('operationData-nextButton-create');

    fireEvent.changeText(caldaVolumeInput, '2');
    fireEvent(nextButtonCreate, 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-FerrugemAsiática'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREVINIL(G)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-yesButton'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-ManchaParda'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-FOX(L)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    let productNames = '';

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (p.props.title === 'PREVINIL (G)' || p.props.title === 'FOX (L)') {
          productNames += p.props.title;
        }
      });

    expect(getByTestId('revision-volume').children[0]).toBe('2');
    expect(productNames.indexOf('PREVINIL (G)') > -1).toBeTruthy();
    expect(productNames.indexOf('FOX (L)') > -1).toBeTruthy();
  });
  it('should be able to make a product addition by button +NewProduct', () => {
    const { getByTestId } = render(<FormPulverization />);

    const caldaVolumeInput = getByTestId('operationData-caldaVolumeInput');
    const nextButtonCreate = getByTestId('operationData-nextButton-create');

    fireEvent.changeText(caldaVolumeInput, '2');
    fireEvent(nextButtonCreate, 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-FerrugemAsiática'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREVINIL(G)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    fireEvent(getByTestId('revision-newProductButton'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Inseticida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-Lagarta-da-soja'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREMIO(G)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    let productNames = '';

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (
          p.props.title === 'PREVINIL (G)' ||
          p.props.title === 'PREMIO (G)'
        ) {
          productNames += p.props.title;
        }
      });

    expect(getByTestId('revision-volume').children[0]).toBe('2');
    expect(productNames.indexOf('PREVINIL (G)') > -1).toBeTruthy();
    expect(productNames.indexOf('PREMIO (G)') > -1).toBeTruthy();
  });
  it('should be able to change the operation data', () => {
    const { getByTestId, getAllByTestId } = render(<FormPulverization />);
    fireEvent.changeText(getByTestId('operationData-caldaVolumeInput'), '2');

    fireEvent(getByTestId('operationData-yesButton'), 'press');
    fireEvent(getAllByTestId('calendar-container')[1], 'press');
    fireEvent(
      getByTestId('operationData-datePartialTimePicker'),
      'onChange',
      null,
      new Date('01/01/2001'),
    );
    fireEvent(getByTestId('operationData-nextButton-create'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-FerrugemAsiática'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREVINIL(G)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    fireEvent(getByTestId('card-edit'), 'press');

    const nextButtonUpdate = getByTestId('operationData-nextButton-update');

    fireEvent.changeText(getByTestId('operationData-caldaVolumeInput'), '4');
    fireEvent(getByTestId('operationData-noButton'), 'press');

    fireEvent(nextButtonUpdate, 'press');

    let productName;

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (p.props.title === 'PREVINIL (G)') {
          productName = p.props.title;
        }
      });

    expect(getByTestId('revision-volume').children[0]).toBe('4');
    expect(productName).toBe('PREVINIL (G)');
  });
  it('should be able to navigate back between screens and edit choices', () => {
    const { getByTestId } = render(<FormPulverization />);

    fireEvent.changeText(getByTestId('operationData-caldaVolumeInput'), '2');
    fireEvent(getByTestId('operationData-nextButton-create'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Fungicida'), 'press');
    fireEvent(getByTestId('selectTarget-itemList-FerrugemAsiática'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-PREVINIL(G)'), 'press');

    fireEvent(getByTestId('button-prev'), 'press');
    fireEvent(getByTestId('selectProduct-button-prev'), 'press');
    fireEvent(getByTestId('selectTarget-button-prev'), 'press');
    fireEvent(getByTestId('selectClass-button-prev'), 'press');

    fireEvent.changeText(getByTestId('operationData-caldaVolumeInput'), '4');
    fireEvent(getByTestId('operationData-nextButton-create'), 'press');

    fireEvent(getByTestId('selectClass-itemList-Acaricida'), 'press');
    fireEvent(getByTestId('selectProduct-itemList-Abamex(L)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    let productName;

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (p.props.title === 'Abamex (L)') {
          productName = p.props.title;
        }
      });

    expect(getByTestId('revision-volume').children[0]).toBe('4');
    expect(productName).toBe('Abamex (L)');
  });

  it('should be able to navigate using the searchInput', () => {
    const { getByTestId, getByPlaceholderText } = render(<FormPulverization />);

    const caldaVolumeInput = getByTestId('operationData-caldaVolumeInput');
    const nextButtonCreate = getByTestId('operationData-nextButton-create');

    fireEvent.changeText(caldaVolumeInput, '2');
    fireEvent(nextButtonCreate, 'press');

    fireEvent.changeText(
      getByPlaceholderText('Buscar por Classe'),
      'Herbicida',
    );
    fireEvent(getByTestId('selectClass-itemList-Herbicida'), 'press');
    fireEvent.changeText(
      getByPlaceholderText('Buscar por Alvo/Função'),
      'Dessecação',
    );
    fireEvent(getByTestId('selectTarget-itemList-Dessecação'), 'press');

    fireEvent.changeText(
      getByPlaceholderText('Buscar por Produto'),
      'GRAMOCIL (L)',
    );
    fireEvent(getByTestId('selectProduct-itemList-GRAMOCIL(L)'), 'press');

    fireEvent.changeText(getByTestId('insertData-doseInput'), '2');
    fireEvent.changeText(getByTestId('insertData-productPriceInput'), '2');

    fireEvent(getByTestId('insertData-nextButton'), 'press');

    fireEvent(getByTestId('insertData-noButton'), 'press');

    let productName;

    getByTestId('revision')
      .findAllByType(Card)
      .forEach(p => {
        if (p.props.title === 'GRAMOCIL (L)') {
          productName = p.props.title;
        }
      });

    expect(getByTestId('revision-volume').children[0]).toBe('2');
    expect(productName).toBe('GRAMOCIL (L)');
  });
});
