import { BrowserRouter as Router, Routes, Route, 
} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Posts from './components/Posts';
import Add from './components/Add';
import Login from './components/Login';


function App() {
  return (
    <Router>
    <Header />
      <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/add' element={<Add />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
