import PokemonApp from './components/product/pokemonApp/src/PokemonApp';
import './App.css';
import BlogPage from './components/product/pokemonApp/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/pokemon" element={<PokemonApp />}></Route>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
