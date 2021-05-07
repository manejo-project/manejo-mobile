/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react';
import InsetData from '../insertData';
import OperationData from '../operationData';
import Revision from '../revision';
import SelectClass from '../selectClass';
import SelectProduct from '../selectProduct';
import SelectTarget from '../selectTarget';

interface IPulverization {
  growthPhase: string;
  selected: boolean;
  caldaVolume: string;
  sampleDate: Date;
  datePartial: Date;
}

interface IProduct {
  classe: string;
  name: string;
  target: string;
  dose: string;
  productPrice: string;
}

const FormPulverization: React.FC = () => {
  const [pulverization, setPulverization] = useState<IPulverization>({
    growthPhase: 'V5',
    selected: false,
    caldaVolume: '',
    sampleDate: new Date(),
    datePartial: new Date(),
  });
  const [product, setProduct] = useState<IProduct>({
    classe: '',
    name: '',
    target: '',
    dose: '',
    productPrice: '',
  });

  const [products, setProducts] = useState<IProduct[]>([]);

  const [type, setType] = useState('');

  const [step, setStep] = useState(1);

  const onChangeHandlerPulverization = useCallback(
    (input: string, value: any) => {
      setPulverization({
        ...pulverization,
        [input]: value,
      });
    },
    [pulverization],
  );

  const onChangeHandlerProduct = useCallback(
    (input: string, value: any) => {
      setProduct({
        ...product,
        [input]: value,
      });
    },
    [product],
  );

  const createProduct = useCallback(() => {
    products.push(product);
    setProduct({
      classe: '',
      name: '',
      target: '',
      dose: '',
      productPrice: '',
    });
  }, [product, products]);

  const nextYes = useCallback(() => {
    createProduct();
    setType('new');
    setStep(2);
  }, [createProduct]);

  const edit = useCallback(() => {
    setType('update');
    setStep(1);
  }, []);

  const newProduct = useCallback(() => {
    setType('new');
    setStep(2);
  }, []);

  const nextNo = useCallback(() => {
    createProduct();
    setStep(6);
  }, [createProduct]);

  let aux = 2;

  switch (step) {
    case 1:
      if (type === 'update') aux = 6;
      else aux = 2;
      return (
        <OperationData
          type={type}
          nextStep={() => setStep(aux)}
          pulverization={pulverization}
          onChangeHandlerPulverization={onChangeHandlerPulverization}
        />
      );
    case 2:
      if (type === 'new') aux = 6;
      else aux = 1;
      return (
        <SelectClass
          type={type}
          nextStep={() => setStep(3)}
          prevStep={() => setStep(aux)}
          product={product}
          onChangeHandlerProduct={onChangeHandlerProduct}
        />
      );
    case 3:
      return (
        <SelectTarget
          nextStep={() => setStep(4)}
          prevStep={() => setStep(2)}
          product={product}
          onChangeHandlerProduct={onChangeHandlerProduct}
        />
      );
    case 4:
      if (product.classe === 'Acaricida') aux = 2;
      else aux = 3;
      return (
        <SelectProduct
          nextStep={() => setStep(5)}
          prevStep={() => setStep(aux)}
          product={product}
          onChangeHandlerProduct={onChangeHandlerProduct}
        />
      );
    case 5:
      return (
        <InsetData
          prevStep={() => setStep(4)}
          nextNo={nextNo}
          nextYes={nextYes}
          product={product}
          onChangeHandlerProduct={onChangeHandlerProduct}
        />
      );
    default:
      return (
        <Revision
          edit={edit}
          newProduct={newProduct}
          pulverization={pulverization}
          products={products}
        />
      );
  }
};

export default FormPulverization;
