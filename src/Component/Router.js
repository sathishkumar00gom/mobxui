import React from "react"
import Navbartop from "./Navbar";
import Home from './Home';
import Body from './Body';
import { Appstate } from "../App";



const Routern=()=>{
return(
<>
<Navbartop/>
<Home/>
<Body store={Appstate}/>
</>
)

}
export default Routern
