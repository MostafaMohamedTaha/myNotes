// import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css'
import Header from './components/Header.js'
import NoteListPage from './pages/NoteListPage.js'
import NotePage from './pages/NotePage.js'
// import { Router } from 'react-router'

function App () {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <div>
          <Route path='/' exact component={NoteListPage} />
          <Route path='/note/:id' component={NotePage} />
          </div>
        </div>
      </div>
    </Router>
  );
}
  
export default App
