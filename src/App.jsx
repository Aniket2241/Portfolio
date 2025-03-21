import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Introduction from './Component/Introduction'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import About from './About'
import Badges from './Component/Badges'
import Footer from './Component/Footer'
function App() {
  

  return (
    <>

<Navbar/>
<Introduction/>
<br /><br />
<Skills/>
<Projects/>
<Badges/>
<About/>
<Footer/>


    </>
  )
}

export default App
