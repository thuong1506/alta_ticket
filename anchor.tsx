import React, { useState } from 'react';

interface HorizontalAnchorProps {
  firstItem: string;
  secondItem: string;
  onItemClick: (item: string) => void;
}

const HorizontalAnchor: React.FC<HorizontalAnchorProps> = ({ firstItem, secondItem, onItemClick }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem(item);
    onItemClick(item);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <a
        href="#"
        style={{
          borderBottom: activeItem === firstItem ? '2px solid #FF993C' : 'none',
          cursor: 'pointer',
          color: activeItem === firstItem ? '#FF993C' : 'initial',
          fontSize: activeItem === firstItem ? '16px' : 'initial',
          marginRight: '10px'
        }}
        onClick={() => handleClick(firstItem)}
      >
        {firstItem}
      </a>
      <a
        href="#"
        style={{
          borderBottom: activeItem === secondItem ? '2px solid #FF993C' : 'none',
          cursor: 'pointer',
          color: activeItem === secondItem ? '#FF993C' : 'initial',
          fontSize: activeItem === secondItem ? '16px' : 'initial',
          marginRight: '20px'
        }}
        onClick={() => handleClick(secondItem)}
      >
        {secondItem}
      </a>
    </div>
  );
};

export default HorizontalAnchor;
