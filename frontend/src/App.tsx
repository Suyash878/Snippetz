import './App.css'
import LandingPage from './components/landing';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Signin from './components/signin';
import { Signup } from './components/signup';

function App() {
  return (
    <>
      <Router>  {/* Wrap the whole app in BrowserRouter */}
        <Routes>
          <Route path="/" element={<LandingPage />} />  {/* Landing page route */}
          <Route path="/signin" element={<Signin />} />  {/* Signin page route */}
          <Route path='signup' element={<Signup></Signup>}></Route>
        </Routes>
    </Router>
    </>
  );
}


export default App
