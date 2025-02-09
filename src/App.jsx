import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { Infoprovider } from './contexts/InfoContext';
import ScrollToTop from './scrolltop.js'
function App() {
  document.querySelector('html').classList.add('dark');
  return (
    <Infoprovider>
      <Header/>
      <ScrollToTop/>
      <Outlet/>
    </Infoprovider>
    
  )
}

export default App