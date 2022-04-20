import React from "react";
import "./Body.scss"
import { Button, Form } from "react-bootstrap";


const Body = () => {
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
                <div className="">
                <input style={{widht:"10rem", height:"50px"}} type="text" placeholder="Email address"></input>
                <Button style={{widht:"100px",height:"50px"}} className="btn-danger">Get Started</Button>
                </div>
            </div>
           
       
        </>
    )
}
export default Body