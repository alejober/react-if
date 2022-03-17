import './App.css';
import NavBarContainer from "./components/NavBarContainer";
import CarouselContainer from './components/CarouselContainer';
import TextosContainer from './components/TextosContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <CarouselContainer />
      <TextosContainer/>
    </div>
  );
}

export default App;
