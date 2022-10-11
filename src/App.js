import React from 'react';
import './App.css';
import ListOfGifs from './componentes/ListOfGifs';
import { Link, Route } from 'wouter';

export default function App() {
  // const [keyword, setKeyword] = useState('Panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/Bleach'>Bleach</Link>
        <Link to='/gif/Nutrias'>Nutrias</Link>
        <Link to='/gif/Pasticho'>Pasticho</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"   
        />
      </section>
    </div>
  );
}


