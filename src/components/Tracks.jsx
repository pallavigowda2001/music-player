import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../token/config";
function Tracks(){
    const [music,setMusic] = useState([])
    //to read router params data -> useParams()
    const params =useParams()

    const searchHandler = async () =>{
        await fetch(`${config.access_url}/v1/artists/${params.aId}/top-tracks?market=IN`,{
            method:"GET",
            headers:{
                Authorization: `${config.access_type} ${config.access_token}`
            }
        }).then(res => res.json())
        .then(res => {
            console.log(`tracks=`,res)
            setMusic(res.tracks)
        }).catch(err => console.log(err))
    }

    useEffect(()=> {
        searchHandler()
    },[])

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-success">Music tracks</h3>
                    <p className="text-secondary"> {params.aId }</p>
                </div>
            </div>

            <div className="row">
                {
                    music?.map((item,index)=> {
                        const {name,album,preview_url} =item
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2" key={index}>
                                <div className="card music-card">
                                    <img src={album ? album.images[0].url :''} alt="" className="card-img-top" />
                                    <div className="card-hover">
                                        <h6 className="text-success text-center">{name}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tracks
