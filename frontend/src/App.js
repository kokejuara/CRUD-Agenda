import './App.css';
import  Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';	
import AddEdit  from './pages/AddEdit';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddEdit />} />
        <Route path='/update/:id' element={<AddEdit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
