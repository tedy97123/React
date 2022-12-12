import React from 'react'
import {motion} from 'framer-motion';

import {images} from '../../constants';
import './Header.scss'
import { AppWrap } from '../../wrapper';
                                                                          /* Documentation */
/*  In this Header component, the first tag we encounter after the parent div is a 'motion' tag that is imported from the framer motion moduel, this component controls gestures, 
these gestures are animated in the browser the whileInView and Trasition  are properties in this tag that control how it animates in the browser. The motion Div in this component
is the most used component  that has helped complete the look of the header. */

 
const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
/* the scaleVariants object and is used to dynamically scale a img that is being imported and used as tags in the Header component. While scaleVarients is true then
animates by instanstiating the properties that are in the objects. 
*/
const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Tedy!</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text"> Full Stack </p>
          <p className="p-text">Freelancer</p>
        </div>
      <div style={{padding:'30px'}}> 
        <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.aws,images.next,images.sql].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img className="app__header-img" src={images.tedy_profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.django, images.redux, images.sb,images.net].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

  </div>
);

export default AppWrap(Header , 'home')