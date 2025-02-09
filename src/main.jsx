import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import InputForm from './components/InputForm/InputForm.jsx'
import Home from './components/Home/Home.jsx'
import UserGuide from './components/UserGuide/UserGuide.jsx'
import Result from './components/Result/Result.jsx'
import ToolOptions from './components/ToolOptions/ToolOptions.jsx'
import FileUpload from './components/FileUpload/FileUpload.jsx'
import FileDashboard from './components/FileDashboard/FileDashboard.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='tool' element={<ToolOptions/>}/>
      <Route path='customer' element={<InputForm/>}/>
      <Route path='upload' element={<FileUpload/>}/>
      <Route path='guide' element={<UserGuide/>}/>
      <Route path='dashboard' element={<FileDashboard/>}/>
      <Route path='result' element={<Result/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
