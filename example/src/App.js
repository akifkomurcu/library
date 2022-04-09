import React from 'react'

import { Button, ExampleComponent } from 'akifzsche'
import 'akifzsche/dist/index.css'

const App = () => {
  return (
    <>
    
    <ExampleComponent text="akifzsche" />
    <Button type="text" text="tikla" onClick={()=>alert('sdad')}/>    
    </>
  )
}

export default App
