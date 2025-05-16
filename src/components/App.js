import '../App.css';
import React, {useState, useEffect} from "react";
import JournalList from './JournalList';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/entries")
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, [])

  //console.log("entries", entries);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mindful Journal</h1>
      </header>
      <JournalList entries={entries} />
    </div>
  );
}

export default App;
