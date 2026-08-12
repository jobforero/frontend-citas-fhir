import React from 'react';

export default function MessageCard({ mensaje, tipo = 'error', onClose }) {
  if (!mensaje) return null;

  const isError = tipo === 'error';

  return (
    <div
      style={{
        backgroundColor: isError ? '#fef2f2' : '#f0fdf4',
        border: `1px solid ${isError ? '#fecaca' : '#bbf7d0'}`,
        color: isError ? '#991b1b' : '#166534',
        padding: '0.75rem 1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.9rem'
      }}
    >
      <span>{mensaje}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginLeft: '0.5rem'
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}