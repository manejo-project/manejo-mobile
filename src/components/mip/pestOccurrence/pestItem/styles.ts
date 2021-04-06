import styled, { css } from 'styled-components/native';

interface IBackgroundList {
  bgColor: boolean;
}

export const ItemListWithTable = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ItemList = styled.View`
  margin-bottom: 8px;
  border-width: 2px;
  border-radius: 4px;
  border-color: #ffc042;
  align-items: center;
  width: 100%;
`;

export const HeaderList = styled.View`
  flex-direction: row;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  /* justify-content: space-around;
  padding-right: 10px;
  padding-left: 15px;
  padding-top: 10px; */
`;

export const ItemListTextTable = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  /* align-self: center;
  justify-content: center; */
`;
export const Lines = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const LineTable = styled.View<IBackgroundList>`
  height: 4px;
  flex: 1;
  ${props => {
    if (props.bgColor) {
      return css`
        background-color: #3d3d4d;
      `;
    }
    return css`
      background-color: #ffc042;
    `;
  }}
`;

export const ItemListImage = styled.Image`
  flex: 1;
  height: 100px;
`;

export const ItemListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemListText = styled.Text`
  padding-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  width: 120px;
`;
