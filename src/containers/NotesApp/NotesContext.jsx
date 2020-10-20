import React, {useContext, useState} from "react";

const NotesContext = React.createContext()
export const useNotesApp = () => useContext(NotesContext)

const NotesProvider = ({children}) => {
    const [loadIsShow, setLoadIsShow] = useState(false)
    const showLoad = () => {
        setLoadIsShow(true)
    }
    const hideLoad = () => {
        setLoadIsShow(false)
    }
    return (
        <NotesContext.Provider value={{
            loadIsShow, showLoad, hideLoad
        }}>{children}
        </NotesContext.Provider>
    )
}
export default NotesProvider