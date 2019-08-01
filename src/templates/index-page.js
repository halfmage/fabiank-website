import React from 'react'
import logo from '../img/logo-fabiank-white.png'

import './styles.css'

const IndexPage = ({}) => {
  return (
    <div 
    className="bg"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      height: '100vh' }}>
      <img src={logo} alt="logo" style={{
        width: '4rem',
        marginBottom: '1rem',
      }} />
      <h2 style={{
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: '700',
        letterSpacing: '-.5px'
      }}>Fabian Klein</h2>
      <h4 style={{
        fontSize: '.825rem',
        marginBottom: '1rem',
        fontWeight: '300',
      }}>
        making films. taking photos
      </h4>
      <div style={{fontSize:'.75rem'}}>t. +49 (0) 1762 1490 478</div>
      <div style={{fontSize:'.75rem', marginBottom:'1rem'}}>e. mail@fabiank.de</div>

      <div style={{fontSize:'.75rem'}}>Remscheider Straße 19</div>
      <div style={{fontSize:'.75rem'}}>D-42659 Solingen</div>
      <div style={{
        display: 'flex',
        marginTop: '1rem'
      }}>
        <a style={{fontSize:'14px',margin:'0 .5rem'}} target="_blank" href="https://vimeo.com/fabianklein">Vimeo</a>
        <a style={{fontSize:'14px',margin:'0 .5rem'}} target="_blank" href="https://www.instagram.com/fabianklein_/">Instagram</a>
      </div>
    </div>
  )
}
export default IndexPage