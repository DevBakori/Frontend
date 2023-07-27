import React, { useState } from 'react'

function Update(){
    const[name, setname] = useState({
        name: 'Paras',
        id: '1001',
        address: '150ft ring road'
    });

    const Test = () => {
        setname({
            name: 'Netra',
            id: 1002,
            address: '80 ft road'
        })
    };

    return(
        <>
        <h1>My name is {name.name}</h1>
        <h1>My id is {name.id}</h1>
        <h1>My address is {name.address}</h1>
        <button onClick={Test}>Click to update</button>
        </>
    )
}

export default Update;