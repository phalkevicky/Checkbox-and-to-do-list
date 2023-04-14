import logo from './logo.svg';
import './App.css';
import { HashRouter,Routes,Route,Navigate } from "react-router-dom";
import { Home } from './Components/Home';
import Error from './Components/Error';
import Todo from './Components/Todo';
import Checkbox from './Components/Checkbox';

function App() {
  return (
   <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/checkbox' element={<Checkbox />} />
      </Routes>
   </HashRouter>
  );
}

export default App;
