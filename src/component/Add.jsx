import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

function Add() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [list, setList] = useState([]);

    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const url = "http://localhost:8009/students"
    //     fetch(url, {
    //         method : 'POST',
    //         body : JSON.stringify({
    //             first_name : name,
    //             last_name : lastName,
    //             gender : gender,
    //         }),
    //         headers: new Headers({ 'content-type': 'application/json' })
    //     })
    //     .then((reponse => reponse.json()))
    //     .then((res) => {
    //         setList(res.data)
    //         navigate("/Valide", {replace : true})
    //     })

    // }


    const addNew = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:8009/students", {
            first_name : name,
            last_name : lastName,
            gender : gender,
          })
          .then((data) => {
            setList(data.data)
            navigate("/Valide", {replace : true})
          });
      };

    const nameUsers = (e) => {
            setName(e.target.value)
    }

    
    const lastNameUsers = (e) => {
        setLastName(e.target.value)
    }

    const genderUsers = (e) => {
        setGender(e.target.value)
    }
  return (
    <div className='section-right'>
        <form>
        <input type="text" placeholder='nom ?' onChange={nameUsers} value={name}/>
        <input type="text" placeholder=' nom de famille ?' onChange={lastNameUsers} value={lastName}/>
        <input type="text" placeholder='genre ?' onChange={genderUsers} value={gender}/>
        <button type='submit' onClick={addNew}>ajouter</button>
        </form>
    </div>
  )
}

export default Add