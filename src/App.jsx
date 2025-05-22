import React from 'react'
import { Input } from './components/input'
import { Button } from './components/button'

export default function App() {
  return (
    <>

      <Input className='border-3' />
      <div className='flex w-full h-25 items-center justify-center'><Button contenido="boton1" /><Button contenido="boton2" /><Button contenido="boton3" /><Button contenido="boton4" /></div>
    </>
  )
}



