import '../App.css';
import React, {useState, useEffect} from "react";
import JournalList from './JournalList';
import AddJournalForm from './AddJournalForm';

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
      </header>
      <AddJournalForm onAddNewEntry={addNewEntry} />
      <JournalList entries={entries} />
    </div>
  );
}

export default App;
