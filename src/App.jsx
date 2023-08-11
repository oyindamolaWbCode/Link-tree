import { useState } from 'react'
import profile from './assets/profilePhotos.png';
import siG from './assets/slG.png';

function App() {

  return (
    <>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src={profile} alt="" />
          <p><b>John Doe</b></p>
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
        
      </div>
    </>
  )
}

export default App
