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

  useEffect(() => {
    const aux = [
      { name: 'Prevenil (G)' },
      { name: 'Aproach Prima (L)' },
      { name: 'FOX (L)' },
      { name: 'AZIMUT (L)' },
      { name: 'FOX XPRO (L)' },
      { name: 'Orkestra SC (G)' },
    ];

    setProducts(aux);
  }, []);

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

  return (
    <View>
      <Header onPressCancel={() => console.log('cancelar')}>
        Novo Produto
      </Header>
      <Container>
        <Card title="Selecione um Produto">
          <SearchInput placeholder="Buscar por Produto" />
          <ProductList
            data={products}
            keyExtractor={productItem => productItem.name}
            renderItem={({ item: productItem }) => (
              <ItemList
                onPress={() => next(productItem.name)}
                selected={productItem.name === product.name}
              >
                <ItemListText>{productItem.name}</ItemListText>
              </ItemList>
            )}
          />
        </Card>

        <ButtonText size="large" color="yellow" onPress={next}>
          Anterior
        </ButtonText>
      </Container>
    </View>
  );
};

export default SelectProduct;
