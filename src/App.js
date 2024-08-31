import './App.css';
import PolicyPage from './components/policyPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/policy" element={<PolicyPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
