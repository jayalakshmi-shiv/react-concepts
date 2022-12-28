import React, { useContext } from 'react';
import { Context } from '../../common/Context/nameProvider';

function ContextUse() {
    const { name } = useContext(Context);
    return (
        <>
            <h1>Component which uses context value</h1>
            <b>
                Name from context {name}
            </b>
        </>
    )
}

export default ContextUse
