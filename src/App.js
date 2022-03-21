import './assets/css/App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import SideLeft from './components/SideLeft';
import Home from './components/Home'
import Products from './components/products/Products'
import Users from './components/users/Users'
import Ends from './components/ends/Ends'
import Error404 from './components/Error404'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <SideLeft />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/ends" element={<Ends />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
