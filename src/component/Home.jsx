import React from 'react'
import { useState, useEffect } from 'react'
import Add from './Add'
import '../App.css'


function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        listItems();
    }, [])

    const listItems = () => {
        const url = "http://localhost:8009/students"
        fetch(url)
            .then((reponse) => reponse.json())
            .then((res) => {
                setUser(res)
            })
    }

    return (
        <div className='section'>
            <div className='section-left'>
                {user.map((value, index) => {
                    return (
                        <ul>
                            <li><span>name :</span>{value.first_name}</li>
                            <li><span>nom de famille : </span>{value.last_name}</li>
                            <li><span>genre : </span>{value.gender}</li>
                        </ul>
                    )
                })}
            </div>
            <div className='section-right'>
                <Add />
            </div>

        </div>
    )
}

export default Home