import React from 'react'
import './App.css'
import { TextField } from './components/form/TextField'
import { Form } from './components/Form'
import { Button } from './components/Button'

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-xl">

      <h1 className="text-font-heading-size-one font-font-heading-weight-one">Sign in</h1>

      <form className="flex flex-col gap-xl w-400" >

        <div className="flex flex-col gap-md">
          <TextField label={'Email:'} />
          <TextField label={'Password'} />
        </div>
        <Button label={'continue'} />

      </form>

    </div>  
  )
}

export default App;
