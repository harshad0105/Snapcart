import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Steps/Header';
import Items from '../Steps/Items';
import Breads from '../Steps/Breads';
import Footer from '../Steps/Footer';
import Slider from '../Steps/Slider';
import Login from '../components/Login'; 
import SignUp from '../components/SignUp';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [location_pathname, setPathName] = useState('');

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  function toggle_pathname(location_name) {
    setPathName(location_name);
  }

  return (
    <>
      <Header />

      <main className='main-content'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Items />
                <Breads />
              </>
            }
          />
          <Route path="/login" element={<Login toggle_pathname={toggle_pathname} />} />
          <Route path="/Signup" element={<SignUp toggle_pathname={toggle_pathname} />} />
        </Routes>
      </main>

      {location_pathname === '/' && <Footer />}
    </>
  );
}

export default App;
