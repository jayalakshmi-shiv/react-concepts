import React, { useContext, useState } from 'react'
import { Input, Label } from 'reactstrap'
import './style.css'
import { Context } from '../../common/Context/promptProvider';

function SignUp() {
  const [name, setName] = useState('')
  const { updatePrompt } = useContext(Context);

  const updateName = e => {
    e.preventDefault();
    setName(e.target.value);
    updatePrompt(e.target.value.length > 0 ? true : false)
  }
  return (
    <>
      <h1>React-route-dom Prompt demo</h1>
      <ol>
        <li>Edit name</li>
        <li>Click on any nav option </li>
      </ol>
      <Label for="name">
        Name
      </Label>
      <Input className='name' onChange={(e) => updateName(e)} value={name} />
    </>

  )
}

export default SignUp