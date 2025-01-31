import { useState } from 'react'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


import './App.css'
import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
<Header/>
<Routes>
  <Route path='/' element={<Cards/>}/>
  <Route path='/cart/:id' element={<CardsDetails />} />

</Routes>
   </>
  )
}

export default App
