import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Navbar, Feed, PinDetail,CreatePin, Search} from '../components'
const Pins = ({user, updateFeed, setupdateFeed}) => {

  const [searchTerm, setSearchTerm] = useState('')


  return (

    <div className="px-2 md:px-5">   
      <div className="bg-grey-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
      </div>
      <div className="h-full">
        <Routes>
          <Route path='/' element={<Feed updatefeedState = {(data) => {setupdateFeed(data)}} updateFeed={updateFeed}/>} />
          <Route path='/catagory/catagoryId:' element={<Feed updatefeedState = {(data) => {setupdateFeed(data)}} updateFeed={() => updateFeed}/>}/>
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user && user} />} />
          <Route path='/create-pin' element={<CreatePin updatefeedState = {(data) => {setupdateFeed(data)}} user={user} />}/>
          <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins