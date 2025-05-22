import React from 'react'
import { useState, useEffect } from 'react'

export default function Cards() {
    const [text, setText] = useState("Info inicial")
    function cambio() {
        setText("Info final")
    }

    return (
        <div className=' w-[200px] '>
            <img className='h-[90%]' src="https://media.istockphoto.com/id/1403500817/es/foto/los-craggies-en-las-monta%C3%B1as-blue-ridge.jpg?s=612x612&w=0&k=20&c=Z-MwaW-16JT72Wup9Cs7I5FhGfp6fgiGH8k6l23R07o=" alt="imagen" />
            <p className='text-[10px] text-white '>Descripcion imagen</p>
            <button onClick={cambio}><p className='text-[10px] text-white '>{text}</p></button>
        </div>

    )
}
