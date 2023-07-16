import React, { useState } from 'react';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';

type RadioButtonProps = {
  name: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({ name }) => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange = (e: RadioChangeEvent) => {
    setChecked(e.target.value);
  };

  return (
    <Radio checked={checked} onChange={handleRadioChange} value={name}>
      {name}
    </Radio>
  );
};

export default RadioButton;
