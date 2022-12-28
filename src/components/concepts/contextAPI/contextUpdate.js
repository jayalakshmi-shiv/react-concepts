import React, { useContext, useState } from 'react'
import { Input, Label } from 'reactstrap'
import { Context } from '../../common/Context/nameProvider';

function ContextUpdate() {
    const [name, setName] = useState('')
    const { updateName } = useContext(Context);
    const updateNameVal = e => {
        e.preventDefault();
        setName(e.target.value);
        updateName(e.target.value)
    }
    return (
        <>
            <h1>Component which updates context value</h1>
            <Label for="name">
                Name
            </Label>
            <Input className='name' onChange={(e) => updateNameVal(e)} value={name} />
        </>
    )
}

export default ContextUpdate
