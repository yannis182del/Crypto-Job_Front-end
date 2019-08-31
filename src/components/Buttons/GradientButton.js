import React from 'react';
import './button.css';

export default function GradiendButton({ link, title }) {
  return (
    <button
      type="button"
      className="apply-button"
      onClick={() => {
        window.location = link;
      }}
    >
      Apply
    </button>
  );
}
