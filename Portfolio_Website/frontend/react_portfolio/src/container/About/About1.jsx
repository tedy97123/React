import React from 'react'
import './About.scss'
import {motion} from 'framer-motion' /*  Gusture (animation) called as a tag "<motiondiv><motiondiv/>" */
import {images} from '../../constants'
import {urlFor, client} from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'
/* importing hooks */
import { useState, useEffect} from 'react'
 
/* End the imports */
                                                                              /* Objects */
                              /* In the *abouts  objet we have a arry of variables that are going to be mapped in the motion.div tag  */
/* const abouts = [ */
/*   {title: 'Web Developments',description:'I am a good web developer', imgUrl: images.about01}, */
/*   {title: 'Frontend Development',description:'For Frontend I use React. React is a declarative, efficient, and flexible JavaScript library for building user interfaces.', imgUrl:images.about02}, */
/*   {title: 'Backend Development',description:' For Backend most of my projects use Django and Sanity. Django Backend development is the process where you build code that allows a database and an application to communicate with one another with the use of API endpoints.  Including databases, servers, and apps.', imgUrl:images.about03},
/*   {title: 'RAD Stack',description:' ', imgUrl:images.about04}, */
/* ] */
/* End of instantiatiion of objects */

const About = () => {
 
 /* States / fetch call to DJANGOserver*/
 /* const [abouts, setAbouts] = useState([]); */

 /*   useEffect=(() => { */
 /*     fetch("http://127.0.0.1:8000/app_portfolio/api/schema/?table=About", { */
 /*       method:"GET", */
 /*       headers:{ */
 /*         "Content-type":"application/json" */
 /*       } */
 /*     }) .then(resp => resp.json()) */
 /*     .then(resp => setAbouts(resp)) */
 /*     .catch(error => console.log(error)) */
 /*   },[])   */

 /* Fetch to Sanity Backend */
 const [abouts, setAbouts] = useState([]); 

 useEffect(() => {
  const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) =>{setAbouts(data)})
    .catch(error => console.log(error))
 } ,[])
 
  return (
    < >
    
      <h2 className="head-text ">I know that <span> to be a Good Developer </span> <br /> means  <span> one should have flexability and ingenuity </span></h2>

      <div className="app__profiles">
        {/* Looping the abouts abject;*/}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.38, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
             
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <p className="p-text" style={{ marginTop: 10 , fontSize:20 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
   );
  };

  export default AppWrap(
    MotionWrap(About,'app__about'),
    'about',
    "app__whitebg");