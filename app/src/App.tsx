import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from '@/pages/Projects'
import Layout from '@/layout/Layout'
import About from '@/pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
