// import logo from './logo.svg';
import './App.css';
//components
import AddUser from './components/AddUser';
import NavBAr from './components/NavBAr';
import CRUDapp from './components/CRUDapp';
import Allusers from './components/Allusers';

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBAr/>
      <Routes>
        <Route path='/' element={<CRUDapp />}/>
        <Route path='/all' element={<Allusers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
