import styled, { css } from 'styled-components/native';

interface IBackgroundList {
  bgColor: boolean;
}

export const Container = styled.View`
  padding: 0 16px;
`;

export const DateOperation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageDateOperation = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 8px;
`;

export const TextDateOperation = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 30px;
`;

export const Data = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 0 16px;
`;

export const CultureStage = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const ImageCultureStage = styled.Image``;

export const CultureStageText = styled.Text`
  position: absolute;
  top: 30px;
  left: 25px;
  font-family: 'RobotoSlab-Bold';
  font-size: 25px;
  color: #ffffff;
`;

export const LabelCultureStage = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 22px;
`;

export const Desfolha = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 130px;
`;

export const DesfolhaText = styled.Text`
  position: absolute;
  top: 30px;
  left: 45px;
  font-family: 'RobotoSlab-Bold';
  font-size: 25px;
  color: #000000;
`;

export const LabelDesfolha = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 22px;
`;

export const ButtonsHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Buttons = styled.View`
  flex-direction: row;
  width: 49%;
`;

export const Table = styled.View``;

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
export const ItemListImage = styled.Image`
  flex: 1;
  height: 100px;
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
