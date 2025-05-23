import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Identitas } from './pages/Identitas.jsx'
import { Pendidikan } from './pages/Pendidikan.jsx'
import { Pengalaman } from './pages/Pengalaman.jsx'
import { NotFound } from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="identitas" element={<Identitas />} />
        <Route path="pendidikan" element={<Pendidikan />} />
        <Route path="pengalaman" element={<Pengalaman />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
