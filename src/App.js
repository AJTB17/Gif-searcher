import React from 'react';
import './App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail'; 
import SearchResults from './pages/SearchResults/getGifs'
import { GifsContextProvider } from './context/GifsContext';
import StaticContext from './context/StaticContext'

export default function App() {
  return (
    <StaticContext.Provider value={{name: 'midudev'}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <h1>App</h1>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route 
              component={Detail}
              path="/gif/:id"   
            /> 
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}


