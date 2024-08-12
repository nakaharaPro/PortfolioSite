

import './App.css';
import PolicyPage from './components/policyPage';
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
        <Route path="/policy" element={<PolicyPage />}></Route>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
