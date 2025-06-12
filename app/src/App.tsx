import Landing from '@/pages/Landing'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from '@/pages/Projects'
import Layout from '@/layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
