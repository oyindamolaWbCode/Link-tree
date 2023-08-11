import { useState } from 'react'
import profile from './assets/profilePhotos.png';

function App() {

  return (
    <>
      <div className='profile-container'>
        <div className='profile-header'>
          <img src={profile} alt="" />
          <p><b>John Doe</b></p>
          </div>
          <div className='profile-dash'>

          </div>
      </div>
    </>
  )
}

export default App
