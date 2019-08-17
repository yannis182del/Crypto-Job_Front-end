import React from 'react';

export default function faIcon(props) {
  const { className, onClick } = props;
  return <span className={className} onClick={onClick} />;
}
