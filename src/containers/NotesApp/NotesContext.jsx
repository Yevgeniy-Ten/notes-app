import React, {useContext, useState} from "react";

const NotesContext = React.createContext()
export const useNotesApp = () => useContext(NotesContext)

const NotesProvider = ({children}) => {
    const [loadIsShow, setLoadIsShow] = useState(false)
    const [isAlertShow, setAlertShow] = useState(false)
    const hideAlert = () => setAlertShow(false)
    const showAlert = () => {
        setAlertShow(true)
        setTimeout(hideAlert, 1000)
    }
    const showLoad = () => {
        setLoadIsShow(true)
    }
    const hideLoad = () => {
        setLoadIsShow(false)
    }
    return (
        <NotesContext.Provider value={{
            loadIsShow, showLoad, hideLoad, isAlertShow, showAlert
        }}>{children}
        </NotesContext.Provider>
    )
}
export default NotesProvider