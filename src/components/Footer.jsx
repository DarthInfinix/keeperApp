import React from 'react'
let time = new Date()
let year = time.getFullYear()
const Footer = () => {
  return (
    <>
        <footer className="footer">
            <p className='copyright'> Copyright {year}</p>
        </footer>
    </>
  )
}

export default Footer