import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0)
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar
          height={3}
          color='#f11996'
          progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          </Routes>
          <Routes>
            <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;



