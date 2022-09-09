import React, { useState} from 'react'
import '../App.css'

export default function ShowPassword(){
    const [password, setPassword] = useState("password")
    const [PassButton, setPassButton] = useState("Show Password")
    const handlePassword = () => {
        if( password === "password"){
            setPassword("text")
            setPassButton("Hide Password")
        }
        else{
            setPassword("password")
            setPassButton("Show Password")
        }
    }

    return <>
        <div className='PassContainer'>
            <input  className="PassInput" type={`${password}`} />
            <button onClick={handlePassword} className='PassButton' >{PassButton}</button>
        </div>
    </>
}