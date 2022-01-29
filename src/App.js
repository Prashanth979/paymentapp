import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction';
import {Route,BrowserRouter, Routes} from "react-router-dom"
import AdminPanel from './AdminPanel';
import Home from './Home';
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/transaction' element={< Transaction />}></Route>
    <Route exact path='/admin' element={< AdminPanel />}></Route>
     </Routes>
      </BrowserRouter>
  );
}

export default App;
