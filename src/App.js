import { HashRouter, Routes, Route, Link } from 'react-router-dom';  
import './App.css';
import Home from './pages/Home';
import GoodMorning from './pages/GoodMorning';
import GoodEvening from './pages/GoodEvening';

function App() {
  return (
    <HashRouter> 
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/morning">Доброе утро</Link>
          </li>
          <li>
            <Link to="/evening">Добрый вечер</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/morning" element={<GoodMorning />} />
        <Route path="/evening" element={<GoodEvening />} />
      </Routes>
    </HashRouter>
  );
}

export default App;