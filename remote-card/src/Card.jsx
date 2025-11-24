import { useState } from 'react';

const Card = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{
      border: '2px solid #2a9d8f',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px',
      fontFamily: 'Arial',
      backgroundColor: '#f0fff4'
    }}>
      <h3 style={{ color: '#2a9d8f' }}>🟢 MFE Product Card</h3>
      <p>Este componente viene del puerto 5002.</p>
      {/** biome-ignore lint/a11y/useButtonType: <non> */}
      <button 
        onClick={() => setLikes(likes + 1)}
        style={{ padding: '10px', cursor: 'pointer', background: '#2a9d8f', color: 'white', border: 'none' }}
      >
        👍 Likes: {likes}
      </button>
    </div>
  );
};

export default Card;