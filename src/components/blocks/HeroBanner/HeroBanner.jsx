import React from 'react'

import Button from '../../UI/Button'

export default function HeroBanner() {
  return (
    <div
      style={{
        padding: 18,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div
        style={{
          padding: 24,
          backgroundColor: '#0a1147',
        }}
      >
        <Button variant="primary">{'Primary button'}</Button>
      </div>

      <div
        style={{
          padding: 24,
        }}
      >
        <Button variant="secondary">{'Secondary button'}</Button>
      </div>
    </div>
  )
}
