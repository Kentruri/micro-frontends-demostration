import React from 'react';

const Header = () => {
  return (
    <nav style={{
      background: 'linear-gradient(90deg, #e63946 0%, #d62828 100%)',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ margin: 0 }}>🔴 MFE Header</h2>
      <div>Usuario: Admin</div>
    </nav>
  );
};

export default Header;