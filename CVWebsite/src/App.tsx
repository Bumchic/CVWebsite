
import 'react-bootstrap'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {motion, easeIn, easeOut, AnimatePresence} from 'motion/react'
import { delay } from 'motion'


function App() {
  return (
    <div className='container'>
      <img src='https://images.stockcake.com/public/4/0/3/4035579d-5ff2-427f-95df-a2956753e51d_large/ethereal-purple-flower-stockcake.jpg'
      />
    </div>
  )
}

export function Greeting() {
  const percent = 25/100
  let initialsize = window.outerWidth * percent
  const [fontsize, setfontsize] = useState(initialsize)
  const [visible, setvisible] = useState(true)
  const transition ={
    delay: 0.4,
    duration: 2
  }
  
  useEffect(() =>{
    const HandleResize = () =>{
      setfontsize(window.outerWidth * percent)
    }

    window.addEventListener('resize', HandleResize)
    return () => {
      window.removeEventListener('resize', HandleResize)
    }
  },[]);
  
  return (
    <AnimatePresence>
      {visible ? <motion.div id='Greeting' className='container-fluid vh-100 d-flex 
        justify-content-center align-items-center position-absolute border'
        exit={{opacity: 0}}>
      <motion.h1 id='HELLO' className='' style={{fontSize: fontsize}} animate={{ y:-600, opacity: easeOut(0)}} 
      transition={transition} onAnimationComplete={() => setvisible(!visible)}>HELLO</motion.h1>
    </motion.div> : null}
    </AnimatePresence>
  )
}

export default App

