/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonIcon from '../../../buttonIcon';

import {
  ItemList,
  ItemListImage,
  ItemListText,
  ItemListContainer,
  ItemListWithTable,
  HeaderList,
  ItemListTextTable,
  LineTable,
  Lines,
} from './styles';

interface Occurrence {
  size: string;
  average: string;
}

interface PestItemProps {
  pest: {
    id: string;
    type: string;
    image: string;
    name: string;
    occurrence: Occurrence[];
  };
  openModal(pest: {
    image: string;
    name: string;
    occurrence: Occurrence[];
  }): void;
}

const PestItem: React.FC<PestItemProps> = ({ pest, openModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <ItemList>
      <ItemListWithTable>
        <ItemListImage source={{ uri: pest.image }} />
        <ItemListContainer>
          <ItemListText> {pest.name} </ItemListText>
          {pest.occurrence.length === 0 ? (
            <ButtonIcon
              icon="plus"
              color="white"
              colorIcon="black"
              size="small"
              onPress={() => openModal(pest)}
            />
          ) : open ? (
            <ButtonIcon
              icon="chevron-up"
              color="white"
              colorIcon="black"
              size="small"
              onPress={() => setOpen(false)}
            />
          ) : (
            <ButtonIcon
              icon="chevron-down"
              color="white"
              colorIcon="black"
              size="small"
              onPress={() => setOpen(true)}
            />
          )}
        </ItemListContainer>
      </ItemListWithTable>
      {open && (
        <>
          {pest.occurrence.length > 0 && (
            <>
              <HeaderList>
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
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ItemListTextTable>Ação</ItemListTextTable>
                </View>
              </HeaderList>
              <Lines>
                <LineTable bgColor={false} />
                <LineTable bgColor />
                <LineTable bgColor={false} />
              </Lines>
            </>
          )}
          {pest.occurrence.map(ocurrence => {
            return (
              <View
                key={`${ocurrence.size}${Math.random()}`}
                style={{ flex: 1 }}
              >
                <HeaderList>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>{ocurrence.size}</ItemListTextTable>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ItemListTextTable>{ocurrence.average}</ItemListTextTable>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ButtonIcon
                      icon="trash"
                      color="red"
                      colorIcon="white"
                      size="small"
                    />
                  </View>
                </HeaderList>
                <LineTable bgColor={false} />
              </View>
            );
          })}
          <View style={{ paddingVertical: 4 }}>
            <ButtonIcon
              icon="plus"
              colorIcon="white"
              color="green"
              size="small"
              onPress={() => openModal(pest)}
            />
          </View>
        </>
      )}
    </ItemList>
  );
};

export default PestItem;
