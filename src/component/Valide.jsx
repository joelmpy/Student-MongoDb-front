import React from 'react'
import {useNavigate} from 'react-router-dom'

function Valide() {
const navigate = useNavigate()

  return (
    <div className='valide'>
      <h1>Tu as bien rentrer tes information ils Sont validé</h1>
      <button onClick={(() => navigate('/'))}>Retour sur home</button>
    </div>
  )
}

export default Valide