import {useState} from "react";

function AddJournalForm() {
    const [newEntry, setNewEntry] = useState({
        date: new Intl.DateTimeFormat("en-US", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now()),
        mood: "",
        activity: "",
        duration: 0,
        description: ""
    });

    function handleChange(event){
        setNewEntry({
            ...newEntry,
            [event.target.name]: event.target.value,
        })
    };

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEntry)
        })
        .then((r) => r.json())
        .then((newEntry) => console.log(newEntry))
    };

    return (
        <div className="new-entry-form">
            <h2>Add Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <select name="mood" onChange={handleChange}>
                    <option>Select Mood</option>
                    <option value="great">Great</option>
                    <option value="good">Good</option>
                    <option value="meh">Meh</option>
                    <option value="bad">Bad</option>
                    <option value="awful">Awful</option>
                </select>
                <select name="activity" onChange={handleChange}>
                    <option>Select Activity</option>
                    <option value="sitting">Sitting</option>
                    <option value="walking">Walking</option>
                    <option value="yoga">Yoga</option>
                    <option value="retreat">Retreat</option>
                </select>
                <p>Activity Duration (minutes):</p>
                <input 
                    type="number"
                    name="duration"
                    placeholder="Activity Duration (minutes)"
                    onChange={handleChange}
                    value={newEntry.duration}
                />
                <textarea 
                    placeholder="Description"
                    name="description"
                    value={newEntry.description}
                    onChange={handleChange}
                />
                <button type="submit">Add Entry</button>
            </form>
        </div>
    )
};

export default AddJournalForm;