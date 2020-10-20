import React from 'react';
import NotesProvider from "./NotesContext";

function NotesApp() {
    return (
        <NotesProvider>
            <div className="NotesApp">
                <h1>NotesApp</h1>
            </div>
        </NotesProvider>
    );
}

export default NotesApp;
