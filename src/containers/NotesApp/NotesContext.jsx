import React, {useContext} from "react";

const NotesContext = React.createContext()
export const useNotesApp = () => useContext(NotesContext)

const NotesProvider = ({children}) => {
    return <NotesContext.Provider value={{}}>
        {children}
    </NotesContext.Provider>
}
export default NotesProvider