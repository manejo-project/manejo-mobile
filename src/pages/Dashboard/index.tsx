import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonText from '../../components/buttonText';

import { Container } from './styles';

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
      >
        Mip
      </ButtonText>
      <ButtonText
        color="green"
        size="large"
        onPress={() => {
          navigation.navigate('Pulverization');
        }}
      >
        Pulverização
      </ButtonText>
    </Container>
  );
};

export default Dashboard;
