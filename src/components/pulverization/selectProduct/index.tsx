import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ButtonText from '../../buttonText';
import Card from '../../card';
import Header from '../../header';
import SearchInput from '../../searchInput';

import { ItemListText, ItemList, ProductList, Container } from './styles';

interface PickerProps {
  nextStep(): void;
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

export interface Product {
  name: string;
}

const SelectProduct: React.FC<PickerProps> = ({
  nextStep,
  prevStep,
  product,
  onChangeHandlerProduct,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterList, setFilterList] = useState<Product[]>([]);
  const [filter, setFilter] = useState('');

  const next = useCallback(
    value => {
      onChangeHandlerProduct('name', value);
      nextStep();
    },
    [nextStep, onChangeHandlerProduct],
  );

  const prev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  useEffect(() => {
    let data = [{ name: '' }];

    switch (product.classe) {
      case 'Acaricida':
        data = [
          { name: 'Abamex (L)' },
          { name: 'Abamectin Nortox (L)' },
          { name: 'Abadin (L)' },
          { name: 'Abamectin Prentiss (L)' },
        ];
        break;
      case 'Fungicida':
        data = [
          { name: 'PREVINIL (G)' },
          { name: 'APROACH PRIMA  (L)' },
          { name: 'FOX (L)' },
          { name: 'AZIMUT (L)' },
          { name: 'FOX XPRO (L)' },
          { name: 'ORKESTRA SC (G)' },
          { name: 'ELATUS (KG)' },
          { name: 'CRONNOS (L)' },
        ];
        break;
      case 'Herbicida':
        data = [
          { name: 'Roundup Wg (KG)' },
          { name: 'TARGA MAX (G)' },
          { name: 'U-46 PRIME (G)' },
          { name: 'GRAMOCIL (L)' },
          { name: 'XEQUE MATE (L)' },
          { name: 'NUQUAT (G)' },
          { name: 'ZAPP PRO (L)' },
          { name: 'CLASSIC (KG)' },
        ];
        break;
      default:
        data = [
          { name: 'LORSBAN 480 BR  (G)' },
          { name: 'TARGA MAX   (G)' },
          { name: 'NOMOLT 150   (G)' },
          { name: 'PREMIO (G)' },
          { name: 'GALIL SC (L)' },
          { name: 'DIMILIN (KG)' },
          { name: 'ORTHENE 750 BR  (G)' },
          { name: 'CONNECT (L)' },
        ];
        break;
    }
    setProducts(data);
    setFilterList(data);
  }, [next, product.classe]);

  const onChangeHandler = useCallback(
    (value: string) => {
      setFilter(value);
      const filtro = products.filter(item =>
        item.name.toUpperCase().includes(value.toUpperCase()),
      );
      setFilterList(filtro);
    },
    [setFilterList, products],
  );

  return (
    <View>
      <Header>Novo Produto</Header>
      <Container>
        <Card title="Selecione um Produto">
          <SearchInput
            placeholder="Buscar por Produto"
            value={filter}
            onChangeText={value => {
              onChangeHandler(value);
            }}
          />
          <ProductList
            data={filterList}
            keyExtractor={productItem => productItem.name}
            renderItem={({ item: productItem }) => (
              <ItemList
                testID={`selectProduct-itemList-${productItem.name.replace(
                  /\s/g,
                  '',
                )}`}
                onPress={() => next(productItem.name)}
                selected={productItem.name === product.name}
              >
                <ItemListText>{productItem.name}</ItemListText>
              </ItemList>
            )}
          />
        </Card>

        <ButtonText
          testID="selectProduct-button-prev"
          size="large"
          color="yellow"
          onPress={prev}
        >
          Anterior
        </ButtonText>
      </Container>
    </View>
  );
};

export default SelectProduct;
