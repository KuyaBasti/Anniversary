import React from 'react'
import Image from 'next/image'
import { Photo } from './AnniversaryPage'

interface FeaturedMemoryProps {
  photo: Photo
}

export default function FeaturedMemory({ photo }: FeaturedMemoryProps) {
  return (
    <div style={{
      margin: '20px 0 40px 0',
      backgroundColor: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1200}
        height={500}
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
          backgroundColor: '#eee'
        }}
        priority
      />
      
      <div style={{ padding: '30px' }}>
        <h2 style={{
          fontSize: '32px',
          margin: '0 0 15px 0',
          color: '#333'
        }}>
          {photo.title}
        </h2>
        
        <p style={{
          fontSize: '14px',
          color: '#777',
          marginBottom: '15px'
        }}>
          {photo.date}
        </p>
        
        <p style={{
          fontSize: '16px',
          lineHeight: '1.5',
          color: '#555'
        }}>
          {photo.description}
        </p>
      </div>
    </div>
  )
} 