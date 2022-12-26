import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rick from '../IMG/icon Rick.png'
import '../App.css'

const NavBar = () => {

    const [ricks, setRicks]=useState({})


    useEffect(()=>{
        const ramdonId = Math.floor(Math.random()*126)+1
        axios.get(`https://rickandmortyapi.com/api/location/${ramdonId}`).then((res)=>setRicks(res.data))
    },[])

    // console.log(ricks);
    return (
        <div className='nav'>
            <div className='nav-icons'>
                <img src={Rick} alt="" />
            </div>
            <div className='nav-text'>
                <h1>Name: {ricks.name}</h1>
                <div className='nav-separator'>
                <div>
                    <p>Type: {ricks.type}</p>
                </div>
                <div> 
                    <p>Dimension: {ricks.dimension}</p>
                </div>
                <div>
                    <p>Number of residents: {ricks.residents?.length}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;