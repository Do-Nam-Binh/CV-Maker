import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResumePreview from './components/ResumePreview'


function App() {
  return (
    <>
        <ResumePreview fullName={{firstName:"Binh", lastName:"Do"}}/>
    </>
  )
}

export default App
