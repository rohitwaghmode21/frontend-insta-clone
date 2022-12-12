import logo from './logo.svg';
import './App.css';
import FetchData from './postView';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './landingPage/landingsPage';
import Postform from './components/postform';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/form' element={<Postform />}></Route>
      <Route path='/content' element={<FetchData />} />
    </Routes>
    </BrowserRouter>
    {/* <FetchData /> */}
    </>
  );
}

export default App;
