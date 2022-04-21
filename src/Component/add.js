import React,{useState} from "react";
import {Form,Button} from "react-bootstrap"
import {observer} from "mobx-react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { runInAction } from "mobx";

const Add=({store})=>{

    const navigate=useNavigate()
    const [value,setValue]=useState("")
    

    const postproducts = async(value) => {
          
        await axios 
        .post("http://localhost:3006/products",value)
        .then((res)=>{
            
         runInAction(()=>(store.products=res.data))
         console.log("hais",store.products)
     })

        .catch((err)=>{
              console.log("err",err)
            });     
    }
    postproducts()
  
   
       const handleChange=(e)=>{
setValue({
    ...value,
    [e.target.name]:e.target.value,
});
        }

        const handleSubmit=()=>{
            navigate("/")
         
            
        }

        const handleDelete=()=>{

        }
        return(
            <>
        <Form>
            <Form.Label>
                    Name
            </Form.Label>
            <Form.Control name="Name" value={value.Name} onClick={handleChange} type="text" placeholder="Name">

            </Form.Control>
            <Form.Label>
                    Releasedate
            </Form.Label>
            <Form.Control name="Releasedate" value={value.Releasedate} onClick={handleChange} type="text" placeholder="Releasedate">

            </Form.Control>
            <Form.Label>
                    url
            </Form.Label>
            <Form.Control name="url" value={value.url} onClick={handleChange} type="text" placeholder="url">

            </Form.Control>
        </Form>
        <Button className="btn-primary" onClick={handleSubmit}>Submit</Button>
       
        </>
    )
}

export default observer(Add)