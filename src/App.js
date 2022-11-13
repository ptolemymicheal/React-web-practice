import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Home';
import PlaceToStay from './stay';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <HomeScreen/> } />
        <Route path="stay" element={ <PlaceToStay/> } />
      </Routes>
    </div>
  );
}

export default App;
