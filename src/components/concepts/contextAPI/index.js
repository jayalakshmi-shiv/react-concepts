import React from 'react';
import ContextUpdate from './contextUpdate';
import ContextUse from './contextUse';

function ContextAPI() {
    return (
        <>
            <h1>Context API demo</h1>
            <p>The context API example implemented using functional components.</p>
            <p>Context provider and consumer implemented in functional components. </p>
            <ol>
                <li>Edit name</li>
                <li>Observe context value updating in contextUse component</li>
            </ol>
            <hr />
            <ContextUse />
            <hr />
            <ContextUpdate />

        </>
    )
}

export default ContextAPI
