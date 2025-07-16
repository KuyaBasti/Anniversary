'use client'

import React, { useState, useEffect } from 'react'

interface TimeElapsed {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Header() {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const startDate = new Date('2024-07-03T00:00:00')
    
    const updateTimer = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeElapsed({ days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    
    return () => clearInterval(interval)
  }, [])
  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      padding: '20px 0',
      textAlign: 'center',
      position: 'relative'
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
          color: '#333',
          textAlign: 'center'
        }}>
          Trin and Basti Adventures
        </h1>
        <p style={{
          fontStyle: 'italic',
          margin: '10px 0',
          fontSize: '18px',
          color: '#777',
          textAlign: 'center'
        }}>
          I am so lucky to have you in my life. The moments we've shared have been nothing 
          short of magical. I am so grateful to have you in my life. 
          I love you more than words can say. 
        </p>
        <div style={{
          textAlign: 'center',
          marginTop: '15px',
          fontSize: '14px',
          color: '#999',
          fontStyle: 'italic'
        }}>
          Together for {timeElapsed.days} days, {timeElapsed.hours} hours, {timeElapsed.minutes} minutes, and {timeElapsed.seconds} seconds 💕
        </div>
      </div>
    </header>
  )
} 