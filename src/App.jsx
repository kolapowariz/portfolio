import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import NotFound from './components/NotFound'
import Details from './components/Datails'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/projects' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    
  )
  
}

export default App
