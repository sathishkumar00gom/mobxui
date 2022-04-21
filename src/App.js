import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from './Component/add';
import {observable} from "mobx"
import Routern from "./Component/Router"


export const Appstate=observable(
  {
     products:[],
     getresult(){
       return Appstate.products   
     }}
     )

function App() {
  return (
    <>
 
  <Router>
    <Routes>
    <Route path="/" element={<Routern/>}/>
      <Route path="/Add" element={<Add/>}/>
    </Routes>
  </Router>
  </>

    )
}

export default App;
