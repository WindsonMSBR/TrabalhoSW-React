import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import CandyListComponent from './components/PropsComponent/CandyListComponent/CandyListComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CandyListComponent />
    </>
  )
}

export default App
