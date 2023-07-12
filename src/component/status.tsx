import React from 'react';
import { Button } from 'antd';

type Status1 = {
  icon?: React.ReactNode;
  name: string;
};

const Status: React.FC<Status1> = ({ name, icon }) => {
  const buttonStyle = {
    backgroundColor: '#DEF7E0',
        border: '2px solid #03AC00',
        color: '#03AC00',
        padding: '10px 20px',
        borderRadius: '5px',
    
  };

  return <Button icon={icon} style={buttonStyle}><b>{name}</b></Button>;
};

export default Status;
