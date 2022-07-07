import './App.css';
import { useState, useEffect } from 'react';
import NavBarContainer from "./components/NavBarContainer";
import CarouselContainer from './components/CarouselContainer';
import TextosContainer from './components/TextosContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    },[])

  return (
    <div className="App">
      
      {loading ? (
        <div className='cargando'>
          <BarLoader size={50} color={'#02417b'} loading={loading} />
        </div>
      ) : (
        
      <><NavBarContainer /><CarouselContainer /><TextosContainer /></>


      )
      }
    </div>
  );
}

export default App;
