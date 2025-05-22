import React from 'react'
import { Input } from './components/input'
import { Button } from './components/button'
import Pexels from './components/pexels'
import Cards from './components/cards'
import PexelsPhotos from './components/PexelsPhotos'
// import { createClient } from 'pexels'

// const client = createClient('JNmdMAkd4EopN8OnxSkEZ9es3QFQuKsdn9XAWvRRrO3CwVLOIG17pb4c');

export default function App() {


  return (
    <>
      <div className='w-full h-full bg-gray-900'>
        <Pexels />
        <Input />
        <div className='flex w-full h-25 items-center justify-center'>
          <Button contenido="Mountain" color="blue" />
          <Button contenido="Beaches" color="green" />
          <Button contenido="Birds" color="red" />
          <Button contenido="Foods" color="gray" />
        </div>
        <div>
          {/* <Cards /> */}
          <PexelsPhotos />
        </div>
      </div>
    </>
  )
}



