import React from 'react';
import { Button } from 'antd';

type ButtonProps = {
  
  icon?: React.ReactNode;
  name: string;
  onClick?: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ name, icon, onClick }) => {
  const buttonStyle = {
    border: '2px solid #FF993C',
    color: '#FF993C',
    width:'120px'
    
  };

  return <Button icon={icon} style={buttonStyle} onClick={onClick}><b>{name}</b></Button>;
 
};



export default CustomButton;
