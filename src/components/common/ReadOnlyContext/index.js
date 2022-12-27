import React from 'react';

const ReadOnlyContext = React.createContext({
    readOnly: null,
    setReadOnly:()=>{}
})

export default ReadOnlyContext;