
import 'react-bootstrap'
import './App.css'
import { useEffect, useState } from 'react'
import { motion, easeIn, easeOut, AnimatePresence} from 'motion/react'



function App() {
  const [textvisible, settextvisible] = useState(false)
  const [textvisible1, settextvisible1] = useState(false)
  const [textvisible2, settextvisible2] = useState(false)
  const [textvisible3, settextvisible3] = useState(false)
  return (
    <>
      <div className='container-fluid mb-5'>
        <div id='header' className='container-fluid d-flex align-items-center border-bottom border-3'>
          <div className='container w-auto'>
            <div className='row'>
              <h2 className='display-1'>Hi!, I'm Dương Anh Minh</h2>
            </div>
            <div className='row'>
              <div className='col'>
                <h2><img className='border me-1' src='https://cdn-icons-png.flaticon.com/256/25/25231.png' style={{ width: "30px", height: "auto" }}></img>
                  <span><a className='h6' href='https://github.com/Bumchic'>Bumchic</a></span></h2>
              </div>

            </div>
            <div className='row'>
              <div className='col'>
                <h2><img className='border me-1' src='https://cdn-icons-png.flaticon.com/512/281/281769.png' style={{ width: "30px", height: "auto" }}></img>
                  <span className='h6'>duonganhminh05@gmail.com</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className=' pb-4 no-gutters w-auto' style={{ backgroundColor: 'white' }}>
          <div id='body' className='container-fluid d-flex justify-content-center'>
            <div className='row'>
              <h1 className='d-flex justify-content-center'>About me</h1>
              <ul className="list-group">
                <li className="list-group-item"><span className='h5'>University: </span>HCMC University of Technology</li>
                <li className="list-group-item"><span className='h5'>Major: </span>Software Engineering</li>
                <li className="list-group-item"><span className='h5'>Experienced language: </span>C#, Javascript, python, C, ReactJS, PHP, HTML, NodeJS, Java</li>
                <li className="list-group-item"><span className='h5'>Technical Skill: </span>Leadership, teamwork, researching, programming, project planning, english fluency</li>
              </ul>
            </div>
          </div>
          
          <div className='container d-flex flex-column'>
            <h1 className='d-flex justify-content-center h1'>My experience</h1>
            <h3 className='h3'>Group Project, hand gesture recognition app </h3>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-3'>
                  <ul className="list-group list-group-flush mb-2">
                    <li className="list-group-item">- Research problem and come up with solution</li>
                    <li className="list-group-item">- Organize group meeting and schedule</li>
                    <li className="list-group-item">- Program and document final application</li>
                    <li className="list-group-item">- Coordinate work as team leader</li>
                    <li className="list-group-item">- Make an app using EmguCV library written in </li>
                  </ul>
                </div>
                <div className='col'>
                  <div className='container d-flex justify-content-start'>
                    <div className='row'>
                      <div className='col position-relative'>
                        <motion.img layout src='../Image\3DevHandRecogProject.jpg' className='d-block showpic' onHoverStart={() => { settextvisible(true) }}
                          onHoverEnd={() => { settextvisible(false) }}></motion.img>
                        <motion.div layout className='position-absolute bottom-0 bg-light popuptext' animate={textvisible ? { opacity: easeIn(1) } : { opacity: easeOut(0) }} >
                          <p>A picture of the team during development</p>
                        </motion.div>
                      </div>
                      <div className='col position-relative'>
                        <motion.img layout src='../Image\CSign.png' className='d-block showpic' onHoverStart={() => { settextvisible1(true) }}
                          onHoverEnd={() => { settextvisible1(false) }}></motion.img>
                        <motion.div layout className='position-absolute bottom-0 bg-light popuptext' animate={textvisible1 ? { opacity: easeIn(1) } : { opacity: easeOut(0) }} >
                          <p >This Hand Gesture Recognition app, It was made to assist with hand sign translation. It's aim is to assist people who have hearing impairment</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <h3 className='h3'>Group Project, AI chinese chess</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-3'>
                  <ul className="list-group list-group-flush mb-2">
                    <li className="list-group-item">- Create a basic AI algorithm used for Chinese Chess</li>
                    <li className="list-group-item">- Working with a team</li>
                  </ul>
                </div>
                <div className='col'>
                  <div className='container d-flex justify-content-start'>
                    <div className='row'>
                      <div className='col position-relative'>
                        <motion.img layout src='../Image\ChineseChess.png' className='d-block showpic' onHoverStart={() => { settextvisible2(true) }}
                          onHoverEnd={() => { settextvisible2(false) }}></motion.img>
                        <motion.div layout className='position-absolute bottom-0 bg-light popuptext' animate={textvisible2 ? { opacity: easeIn(1) } : { opacity: easeOut(0) }} >
                          <p>Chinese Chess app written in C#</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className='h3'>Group Project, Online canvas PixelWorld</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-3'>
                  <ul className="list-group list-group-flush mb-2">
                    <li className="list-group-item">- Create a website using ReactJS</li>
                    <li className="list-group-item">- Create a simple server</li>
                    <li className="list-group-item">- Graphic manipulation using PixieJS</li>
                  </ul>
                </div>
                <div className='col'>
                  <div className='container d-flex justify-content-start'>
                    <div className='row'>
                      <div className='col position-relative'>
                        <motion.img layout src='../Image\PixelWorld.png' className='d-block showpic' onHoverStart={() => { settextvisible3(true) }}
                          onHoverEnd={() => { settextvisible3(false) }}></motion.img>
                        <motion.div layout className='position-absolute bottom-0 bg-light popuptext' animate={textvisible3 ? { opacity: easeIn(1) } : { opacity: easeOut(0) }} >
                          <p>Chinese Chess app written in C#</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Greeting() {
  const percent = 25 / 100
  let initialsize = window.outerWidth * percent
  const [fontsize, setfontsize] = useState(initialsize)
  const [visible, setvisible] = useState(true)
  const transition = {
    delay: 0.4,
    duration: 2
  }

  useEffect(() => {
    const HandleResize = () => {
      setfontsize(window.outerWidth * percent)
    }

    window.addEventListener('resize', HandleResize)
    return () => {
      window.removeEventListener('resize', HandleResize)
    }
  }, []);
  return (
    <AnimatePresence >
      {visible ? <motion.div id='Greeting' className='container-fluid vh-100 d-flex 
        justify-content-center align-items-center sticky-top border'
        exit={{ opacity: 0 }}>
        <motion.h1 id='HELLO' className='' style={{ fontSize: fontsize, opacity: 0 }} animate={{ opacity: easeIn(1) }}
          transition={transition} onAnimationComplete={() => setvisible(!visible)}>HELLO</motion.h1>
      </motion.div> : null}
    </AnimatePresence>
  )
}

export default App

