import React from 'react';
import { Tag } from 'antd';

interface CustomTagProps {
  status: string;
}

const GrayTag: React.FC<CustomTagProps> = ({ status }) => (
  <Tag icon={<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
  <circle cx="4" cy="4.5" r="4" fill="#919DBA" />
</svg>} color="gray"> {status}</Tag>
);

const RedTag: React.FC<CustomTagProps> = ({ status }) => (
  <Tag icon={<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
  <circle cx="4" cy="4.5" r="4" fill="#FD5959" />
</svg>} color="red"> {status}</Tag>
);

const GreenTag: React.FC<CustomTagProps> = ({ status }) => (
  <Tag icon={<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
  <circle cx="4" cy="4.5" r="4" fill="#03AC00" />
</svg>} color="green"> {status}</Tag>
);

export { GrayTag, RedTag, GreenTag };
