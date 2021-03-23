import React, { useCallback, useState } from 'react';
import InsetData from '../insertData';
import OperationData from '../operationData';
import Revision from '../revision';
import SelectClass from '../selectClass';
import SelectProduct from '../selectProduct';
import SelectTarget from '../selectTarget';

const FormPulverization: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  const prevStep = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  switch (step) {
    case 1:
      return <OperationData nextStep={nextStep} />;
    case 2:
      return <SelectClass nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <SelectTarget nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <SelectProduct nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <InsetData nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <Revision nextStep={nextStep} prevStep={prevStep} />;
  }
};

export default FormPulverization;
