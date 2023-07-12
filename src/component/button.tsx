import React from 'react';
import { Button } from 'antd';

type ButtonProps = {
  icon?: React.ReactNode;
  name: string;
};

const CustomButton: React.FC<ButtonProps> = ({ name, icon }) => {
  const buttonStyle = {
    border: '2px solid #FF993C',
    color: '#FF993C',
    
  };

  return <Button icon={icon} style={buttonStyle}><b>{name}</b></Button>;
};

export default CustomButton;
