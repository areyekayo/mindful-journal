import '../App.css';
import React, {useState, useEffect} from "react";
import JournalList from './JournalList';
import AddJournalForm from './AddJournalForm';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, [])

  function addNewEntry(newEntry) {
    setEntries([...entries, newEntry])
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Mindful Journal</h1>
        <NavBar />
      </header>
      <Outlet context={{entries: entries, onAddEntry: addNewEntry}} />
    </div>
  );
}

export default App;
