import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const value = {
        loggedIn,
        setLoggedIn
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

