import React from 'react'
import UserContext from './userContext'

const userContextProvider = ({children}) => {
    return(
        <>
        {children}
        </>
    )
}

export default userContextProvider;