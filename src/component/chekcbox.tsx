import React, { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

type Checkbox1Props = {
  name: string;
};

const Checkbox1: React.FC<Checkbox1Props> = ({ name }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <Checkbox checked={checked} onChange={handleCheckboxChange}>
      {name}
    </Checkbox>
  );
};

export default Checkbox1;
