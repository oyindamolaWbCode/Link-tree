import { useState } from 'react'
import profile from './assets/profilePhotos.png';
import siG from './assets/slG.png';
import kodeLogo from './assets/Kode.png';
import KodeStyle from './assets/kodeStyle.png';

function App() {

  return (
    <>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src={profile} alt="" />
          <h3>John Doe</h3>
          </div>
          <div className='profile-dash'>
            <div className='bar'>
              <p className='bar-para'>Twitter Link</p>
            </div>
            <div className='bar'>
              <p className='bar-para'>KodeCamp Team</p>
            </div>
            <div className='bar'>
              <p className='bar-para'>KodeCamp Books</p>
            </div>
            <div className='bar'>
              <p className='bar-para'>Python Books</p>
            </div>
            <div className='bar'>
              <p className='bar-para'>background Check for Coders</p>
            </div>
            <div className='bar'>
              <p className='bar-para'>Design books</p>
            </div>
            <div className='logo'>
              <img src = {siG} alt='' />
            </div>
          </div>
      </div>
      <div className='flexy-footer'>
        <div className='footer'>
          <img src={kodeLogo} alt='' />
          <p>KodeCamp Internship Task</p>
          <img src={KodeStyle} alt='' />
        </div>
      </div>SS
    </>
  )
}

export default App
