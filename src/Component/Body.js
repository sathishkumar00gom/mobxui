import React, { useEffect, useState } from "react";
import "./Body.scss"
import { Button } from "react-bootstrap";
import {observer} from "mobx-react"
import { Appstate } from "../App";
import {Card} from "react-bootstrap"
import {runInAction} from "mobx"
import axios from "axios"
import { useNavigate } from "react-router-dom";




const Body =({store}) => {
    const navigate=useNavigate();
     console.log(store,"store")
     const [del,setDel]=useState(false)
    const fetched = async() => {
          
               await axios 
               .get("http://localhost:3006/products")
               .then(res=>{
                   console.log("rr",res) 
let uniqueChars = [...new Set(res.data)];
                runInAction(()=>(store.products.push(uniqueChars)))

                console.log("hais",store.products)
            })
       
               .catch((err)=>{
                     console.log("err",err)
                   });     
           }

           useEffect(()=>{
               fetched()
               console.log("hai",store.getresult())
           },[])
           
           const handleSubmit=()=>{
               navigate("/Add")
           }

           const handleDelete=(products)=>{
            const deleteproducts = async() => {
          
                await axios 
                .delete(`http://localhost:3006/products/${products}`)
                .then(res=>{
                    console.log("rr",res) 
                // //  runInAction(()=>(store.products=res.data))
                  setDel(true)
                 console.log("hais",store.products)
             })
        
                .catch((err)=>{
                      console.log("err",err)
                    });     
            }
            deleteproducts()
           }
      

          

           
        
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="Bold">Enjoy your tv</div>
                        <p className="Ptag">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
                    </div>
                    <div className="col-sm-6">
                        <img className="tvimg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    <img className="tvimg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                      
                    </div>
                    <div className="col-sm-6">
                    <div className="Bold">Download your shows to watch offline</div>
                        <p className="Ptag">Save your favourites easily and always have something to watch</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="Bold">Watch everywhere</div>
                        <p className="Ptag">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
                    </div>
                    <div className="col-sm-6">
                        <img className="tvimg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    <img className="tvimg" src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" />
                        
                    </div>
                    <div className="col-sm-6">
                    <div className="Bold">Create profiles for children</div>
                        <p className="Ptag">Send children on adventures with their favourite characters in a space made just for them—free with your membership</p>
                    </div>
                </div>
            </div>

            <div className="containern">
                <h1>Frequently Asked Questions</h1>
                <input className="input" type="text" placeholder="what is NetFlix?" ></input>
                <input className="input" type="text" placeholder="what is NetFlix?" ></input>
                <input className="input" type="text" placeholder="what is NetFlix?" ></input>
                <input className="input" type="text" placeholder="what is NetFlix?" ></input>
                <input className="input" type="text" placeholder="what is NetFlix?" ></input>
                <p className="ready"style={{color:"white"}}>Ready to watch? Enter your email to create or restart your membership</p>
                <div className="whole" style={{alignContent:"center"}}>
                <input style={{widht:"10rem", height:"50px"}} type="text" placeholder="Email address"></input>
                <Button style={{widht:"100px",height:"50px"}} className="btn-danger">Get Started</Button>
                </div>
                </div>
            
                
            { store.products.map((productdata,index)=>{
                return productdata.map((product)=>
                {return(
                    <>
                   
                    <Card 
                      style={{ width: "18rem", display:"inline-block", borderRadius:"10px"}}>
                      <Card.Img 
                       src={product.url}>
                      </Card.Img>
                      <Card.Body >
                      <div> {product.id}</div> 
                      <div> {product.Name}</div>
                      <div> {product.Releasedate}</div> 
                      
                      </Card.Body>
                      <Button onClick={handleSubmit}>Add</Button>
                      <Button className="btn-danger" onClick={()=>handleDelete(product.id)}>Deleted</Button>
                  
                  </Card>
                 </>
                 )})})}
                

                
                 


 </> 
    )
}
export default observer (Body);