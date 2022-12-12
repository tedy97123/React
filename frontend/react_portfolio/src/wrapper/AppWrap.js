/* Higher order Component */
import {NavigationDots , SocialMedia} from '../components'
import React from 'react'
/* This components will wrap over the other components */
const AppWrap = (Component, idName , classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}> 
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
            <div className="copyright">
              <p className=" ">@2022 TEDY YOHANES</p>
              <p className=" ">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap