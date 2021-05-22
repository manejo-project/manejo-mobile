import React from 'react';
import FormPulverization from '../../components/pulverization/formPulverization';

import { Container } from './styles';

const Pulverization: React.FC = () => {
  return (
    <Container testID="teste">
      <FormPulverization />
    </Container>
  );
};

export default Pulverization;
