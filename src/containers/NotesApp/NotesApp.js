import React from 'react';
import NotesProvider from "./NotesContext";
import NavBar from "../../components/NavBar/NavBar";

function NotesApp() {
    return (
        <NotesProvider>
            <div className="NotesApp">
                <NavBar/>
            </div>
        </NotesProvider>
    );
}

export default NotesApp;
