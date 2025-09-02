import React from 'react';

const Error = ({ message }) => {
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8d7da'
        }}>
            <div style={{
                padding: '2rem 3rem',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '1px solid #f5c2c7'
            }}>
                <h2 style={{ color: '#d32f2f', marginBottom: '1rem' }}>Error</h2>
                <p style={{ color: '#333' }}>{message}</p>
            </div>
        </div>
    );
};

export default Error;