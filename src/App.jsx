import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Starred from './pages/starred';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Starred" element={<Starred/>}/>
      <Route path="*" element={<div>Page not found</div>}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
