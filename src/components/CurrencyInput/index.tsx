import React from 'react';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

interface ICurrencyInputProps {
  inputmode?: string;
  maskOptions?: {
    prefix: string;
    suffix: string;
    includeThousandsSeparator: boolean;
    thousandsSeparatorSymbol: string;
    allowDecimal: boolean;
    decimalSymbol: string;
    decimalLimit: string;
    requireDecimal: boolean;
    allowNegative: boolean;
    allowLeadingZeroes: boolean;
    integerLimit: number;
  };
  typeInput?: string;
}

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  requireDecimal: false,
  allowLeadingZeroes: true,
}

const CurrencyInput: React.FC<ICurrencyInputProps> = ({ 
  inputmode = 'numeric',
  typeInput = 'text',
  maskOptions = {}, 
  ...inputProps 
}) => {

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  });
    
  return (
    <MaskedInput 
      mask={currencyMask} 
      type={typeInput}
      {...inputProps}
    />
  )
};

export default CurrencyInput;
