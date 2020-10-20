import React from 'react';
import NotesProvider from "./NotesContext";
import NavBar from "../../components/NavBar/NavBar";
import Container from "react-bootstrap/Container";
import {Switch, Route, Redirect} from "react-router-dom"
import {About} from "../../pages/About/About";
import {Todos} from "../Todos/Todos";
import {Movies} from "../Movies/Movies";

function NotesApp() {
    return (
        <NotesProvider>
            <div className="NotesApp">
                <NavBar/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={About}></Route>
                        <Route path="/todos" exact component={Todos}></Route>
                        <Route path="/movies" exact component={Movies}></Route>
                        <Redirect from="" to="/"/>
                    </Switch>
                </Container>
            </div>
        </NotesProvider>
    );
}

export default NotesApp;
