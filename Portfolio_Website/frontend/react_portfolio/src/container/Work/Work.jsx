import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  let [WorkMaps,setWorkMaps] = useState({})
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  useEffect(() => {
    const query = '*[_type == "works"]'; /* Works is an arry of items ({}) */

    client.fetch(query).then((data) => {
      const workmap =  {}
      for(let i = 0; i < data.length; i++) {

        workmap[data[i].tags] = [data[i]]
      }
      console.log('data:',data)
      console.log('workmap: ',workmap)
      console.log('item:',workmap['Twitter Stock Tracker'])
      setWorkMaps(workmap)
 
      setWorks(data);
      setFilterWork(data);
    });
    console.log(WorkMaps)
   
  }, []);
  

  const handleWorkFilter = (item) => { /* item is a string parm */
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);/* Animation trigger after category is chaned. */

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);/* Retrigges animation */

      if (item === 'All') { 
        setFilterWork(works);
        console.log('All:',works)/* Set filter takes all the properties stored in the works vaiable. "All => " renders all componetns designated in works */
      } else {
        setFilterWork(WorkMaps[item]); /* its filtered, populates card with tags saved in the sanity backend  Needs to be array that is filtered to one length*/
      }
    }, 500);

  };

  return (
    <>
      <h2 className="head-text"> 💭 My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Most Recent Work','1st Project', '2nd Project', '3rd Project', '4th Project', '5th Project','6th Project' ,'7th Project', 'Github','All'] .map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work,'app__works'),
  'work',
  "app_primarybg");