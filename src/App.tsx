import React from 'react'
import './App.css'
import { Card } from './components/layout/Card'
import { Heading } from './components/typography/Heading'
import { SigninForm } from './SigninForm'

function App() {

  return (
    <div className="brand-one flex flex-col w-screen h-screen items-center justify-center">

      <Card>
        <Heading level={1}>Sign in</Heading>
        <SigninForm />
      </Card>
    </div>  
  )
}

export default App;
