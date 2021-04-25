import React, { useCallback, useState } from 'react';
import MipSample from '../mipSample';
import NaturalPredatorOccurrence from '../naturalPredatorOccurrence';
import PestDiseasesOccurrence from '../pestDiseasesOccurrence';
import PestOccurrence from '../pestOccurrence';
import Revision from '../revision';

interface ISampleData {
  sampleDate: Date;
  growthPhase: string;
  desfolha: string;
}

interface Occurrence {
  size: string;
  average: string;
}

interface IPest {
  id: string;
  type: string;
  image: string;
  name: string;
  occurrence: Occurrence[];
}

interface IPestDiseases {
  id: string;
  image: string;
  name: string;
  average: string;
}

interface INaturalPredator {
  id: string;
  image: string;
  name: string;
  average: string;
}

const FormMip: React.FC = () => {
  const [sampleData, setSampleData] = useState<ISampleData>({
    sampleDate: new Date(),
    growthPhase: 'V5',
    desfolha: '0',
  });

  const [pests, setPests] = useState<IPest[]>([]);
  const [pestsDiseases, setPestsDiseases] = useState<IPestDiseases[]>([]);
  const [naturalsPredator, setNaturalsPredator] = useState<INaturalPredator[]>(
    [],
  );

  const [step, setStep] = useState(1);

  const nextStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  const prevStep = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const onChangeHandlerSampleData = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (input: string, value: any) => {
      setSampleData({
        ...sampleData,
        [input]: value,
      });
    },
    [sampleData],
  );

  switch (step) {
    case 1:
      return (
        <MipSample
          sampleData={sampleData}
          nextStep={nextStep}
          onChangeHandlerSampleData={onChangeHandlerSampleData}
        />
      );
    case 2:
      return (
        <PestOccurrence
          pests={pests}
          handleSetPests={value => setPests(value)}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <PestDiseasesOccurrence
          pestsDiseases={pestsDiseases}
          handleSetPestsDiseases={value => setPestsDiseases(value)}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <NaturalPredatorOccurrence
          naturalsPredator={naturalsPredator}
          handleSetNaturalsPredator={value => setNaturalsPredator(value)}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return (
        <Revision
          sampleData={sampleData}
          pests={pests}
          pestsDiseases={pestsDiseases}
          naturalsPredator={naturalsPredator}
          prevStep={prevStep}
        />
      );
  }
};

export default FormMip;
