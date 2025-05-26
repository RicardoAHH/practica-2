import { useState } from 'react'
import { Input } from './components/input'
import { Button } from './components/button'
import Pexels from './components/pexels'
import Cards from './components/cards'
import PexelsPhotos from './components/PexelsPhotos'
// import { createClient } from 'pexels'

// const client = createClient('JNmdMAkd4EopN8OnxSkEZ9es3QFQuKsdn9XAWvRRrO3CwVLOIG17pb4c');

export default function App() {

  const [search, setSearch] = useState("nature")

  return (
    <>

      <div className='w-full h-full bg-gray-900'>
        <Pexels />
        <Input
          search={search}
          setSearch={setSearch}
        />
        <div className='flex w-full h-25 items-center justify-center'>
          <Button contenido="Mountain" color="blue" search={search} setSearch={setSearch} />
          <Button contenido="Beaches" color="green" search={search} setSearch={setSearch} />
          <Button contenido="Birds" color="red" search={search} setSearch={setSearch} />
          <Button contenido="Foods" color="gray" search={search} setSearch={setSearch} />
        </div>
        <div className='Container'>
          {/* <Cards /> */}
          <PexelsPhotos search={search} />
        </div>
      </div>
    </>
  )
}



