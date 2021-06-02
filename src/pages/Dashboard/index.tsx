import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonText from '../../components/buttonText';

import { Container } from './styles';

function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonText
        color="green"
        size="large"
        onPress={() => {
          navigation.navigate('Mip');
        }}
        {...testProps('mip-form-button')}
      >
        Mip
      </ButtonText>
      <ButtonText
        color="green"
        size="large"
        onPress={() => {
          navigation.navigate('Pulverization');
        }}
        {...testProps('pulverization-form-button')}
      >
        Pulverização
      </ButtonText>
    </Container>
  );
};

export default Dashboard;
