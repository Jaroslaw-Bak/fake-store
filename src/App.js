import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import axiosDataContext from './axiosDataContext';
import { DataProvider } from './DataContext';


function App () {

  const [ axiosData, setAxiosData] = useState(null);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then(response => {
      setAxiosData(response.data)
    })
  },[])
  

  return (
    
    <div className="app">
      <axiosDataContext.Provider value={axiosData}>
        <DataProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Clothes" element={<Products />} />
              <Route path='/Electronics' element={<Products />}/>
              <Route path='/Furniture' element={<Products />}/> 
              <Route path='/Shoes' element={<Products />}/> 
              <Route path='/Others' element={<Products />}/>
              <Route path='/Cart' element={<Cart />}/> 
            </Routes>
            <Footer />
          </Router>
        </DataProvider>
      </axiosDataContext.Provider>
    </div>
  );
}

export default App;
