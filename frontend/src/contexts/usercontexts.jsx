import React, {useState, createContext} from 'react'

export const userContext = createContext(null);

export const UserProvider = (props) => {
    console.log(props);
    const [user, setUser] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        userToken: ''
    });
    return (
        <userContext.Provider value={{user, setUser}}>
            {props.children}
        </userContext.Provider>
    )
}
