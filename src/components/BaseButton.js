import React from 'react';

export default function BaseButton(props) {
  return (
    <button
      type={props.type}
      className="bg-blue-500 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
