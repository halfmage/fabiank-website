import React from 'react'
import logo from '../img/logo-fabiank.png'

const IndexPage = ({}) => {
  return (
    <div style={{
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
        fontSize: '1.25rem',
        fontWeight: '700',
      }}>Fabian Klein</h2>
      <h4 style={{
        fontSize: '.825rem',
        marginBottom: '1rem'
      }}>
        Filmmaker. Photographer
      </h4>
      <div style={{fontSize:'.75rem'}}>+49 (0) 1762 1490 478</div>
      <div style={{fontSize:'.75rem'}}>mail@fabiank.de</div>
      <div style={{
        display: 'flex',
        marginTop: '1rem'
      }}>
        <a style={{fontSize:'14px',margin:'0 .5rem'}} target="_blank" href="https://vimeo.com/fabianklein">Vimeo</a>
        <a style={{fontSize:'14px',margin:'0 .5rem'}} target="_blank" href="https://www.instagram.com/fabianklein_/">Instagram</a>
        <a style={{fontSize:'14px',margin:'0 .5rem'}} target="_blank" href="https://www.facebook.com/Fabian-Klein-320664735407574/">Facebook</a>
      </div>
    </div>
  )
}
export default IndexPage