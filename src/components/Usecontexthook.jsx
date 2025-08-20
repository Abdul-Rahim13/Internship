import {createContext} from 'react'

    // allow us to create globally data and we can access these data from any componenet without passing through a props. Involves 3 steps:
    // 1. creating context 2. providing context 3.consuming context

export const AppContext = createContext()

const ContextProvider = (props) => {
    const phone = '03151464618'
    const name = 'Abdul Rahim'
    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider


