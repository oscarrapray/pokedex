import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { DetallePokemon } from './components/DetallePokemon';
import { Header } from './components/Header';
import { Home } from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetallePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App