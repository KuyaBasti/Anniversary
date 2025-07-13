import React from 'react'

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '20px 0',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
          fontSize: '48px',
          margin: '0',
          color: '#333'
        }}>
          Trin and Basti Adventures
        </h1>
        <p style={{
          fontStyle: 'italic',
          margin: '10px 0',
          fontSize: '18px',
          color: '#777'
        }}>
          I am so lucky to have you in my life. The moments we've shared have been nothing 
          short of magical. I am so grateful to have you in my life. 
          I love you more than words can say. 
        </p>
      </div>
    </header>
  )
} 