import { useState } from 'react'
import profile from './assets/profile__img.png';
import slack from './assets/slack.png';
import github from './assets/Social icon.png'
import kodeLogo from './assets/kodecamp logo white 2.png';
import KodeStyle from './assets/KodeHauz Logo 1.png';

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
              <img src = {slack} alt='' className='slc'/>
              <img src = {github} alt='' className='git'/>
            </div>
          </div>
      </div>
      <div className='flexy-footer'>
        <div className='footer'>
          <img src={kodeLogo} alt='' />
          <p>KodeCamp Internship Task</p>
          <img src={KodeStyle} alt='' />
        </div>
      </div>
    </>
  )
}

export default App
