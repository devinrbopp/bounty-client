import { useState, useEffect } from 'react'
import './App.css';

import Poster from './Poster'
import Display from './Display'
import Form from './Form';

function App() {

  const [bounties, setBounties] = useState([])
  const [current, setCurrent] = useState({})
  
  const handleClick = (bounty) => {
    setCurrent(bounty)
  }

  useEffect(() => {
    fetch('http://localhost:8000/bounties')
    .then(response => {
      return response.json()
    })
    .then(foundBounties => {
      console.log(foundBounties)
      setBounties(foundBounties)
    })
  }, [])
  
  const posters = bounties.map(b => {
    return <Poster bounty={b} key={b.name} handleClick={handleClick}/>
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted</h1>
        <Display bounty={current} />
      </header>
      <section className="Poster-Board">
        {posters}
      </section>
      <section className="App-header">
        <Form />
      </section>
    </div>
  );
}

export default App;
