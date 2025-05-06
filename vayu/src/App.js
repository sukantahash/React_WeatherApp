import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Forecast from './pages/Forecast';

import './styles/Vayu.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/weather/:city' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;