import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Browser router does not currently play nice with GH Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Application from './pages/Application';
import DonationConfirmation from './pages/DonationConfirmation';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/application" element={<Application />} />
            <Route path="/donate-confirmation" element={<DonationConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
