import React from 'react';
import {useState} from 'react'
import './Navbar.scss';
import { images } from '../../constants';
import {HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';
/*                                                     ~~~~~~~~~Documentation for the Navbar Component~~~~~~~~~~                                                             */

/*                 Unorder list tag ; this underodered list is going to loop through all of the elements that is going to be in the navigation bar
                  then lists of the elemts gets looped through  and gets maped in teh div tag as clickable objects on site. Then the anchor tag uses 
                  a template string to create a hashmap of the items array that was rendered earlier the mapped elements leads us strait to the corresponding
                  element on the onthe page ** Usestate_settoggle **The onclick toggeles the state! with the click of the button it'll toggle the sidebar menu! 
                  While the menu is open(true) itll render the mobile naviation bar with the motion div from the framer-motion module.                                       */
 /*           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       */
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.Tedy} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 