import { BrowserRouter as Router, Routes, Route, 
} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Posts from './components/Posts';
import Add from './components/Add';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <Router>
    <Header />
      <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/add' element={<RequireAuth><Add /></RequireAuth>} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
