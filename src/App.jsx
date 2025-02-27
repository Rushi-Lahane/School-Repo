
import { Link, Route, Routes } from 'react-router'
import Admission from './pages/Admission'
import Home from './pages/Home'
import About from './pages/About'
import Header from './Component/Header.jsx';
import Footer from './Component/Footer.jsx';
import Academic from './pages/Academic.jsx';
import Mandatory from './pages/MandatoryPubDisclosure.jsx';
import Achievement from './pages/Achievement.jsx';
import Infrastructure from './pages/Infrastructure.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Gallery from './pages/Gallery.jsx';

function App() {

  return (
    <>
   
      {/* Header */}
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/academic' element={<Academic/>}/>
        <Route path='/mandatory' element={<Mandatory/>} />
        <Route path='/achievement' element={<Achievement/>}/>
        <Route path='/infrastructure' element={<Infrastructure/>} />
        <Route path='/contact-Us' element={<ContactUs/>}/>
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
