import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '40px 0',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px'
      }}>
        <p style={{
          fontSize: '14px',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Our journey together, one memory at a time. 
          This photo book contains the moments we've cherished 
          and the adventures we've shared. Here's to many more memories to come!
        </p>
      </div>
    </footer>
  )
} 