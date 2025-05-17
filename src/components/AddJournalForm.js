import {useState} from "react";
import { useOutletContext } from "react-router-dom";

function AddJournalForm() {
    const [errors, setErrors] = useState([])

    const [newEntry, setNewEntry] = useState({
        date: new Intl.DateTimeFormat("en-US", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now()),
        mood: "",
        activity: "",
        duration: 0,
        description: ""
    });

    //get onAddEntry from Outlet Context
    const {onAddEntry} = useOutletContext();

    function handleChange(event){
        setNewEntry({
            ...newEntry,
            [event.target.name]: event.target.value,
        })
    };

    function handleSubmit(event){
        event.preventDefault();
        // reset stale errors from previous submits
        setErrors([])
        // get errors synchronously from handleErrors
        const tempErrors = handleErrors();

        if (tempErrors.length === 0) {
            // if no errors, post new entry
            fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEntry)
            })
            .then((r) => r.json())
            .then((newEntry) => onAddEntry(newEntry));

            // reset form fields
            setNewEntry({
                mood: "",
                activity: "",
                duration: 0,
                description: ""
            })
        }
        else {
            // if errors, set errors in state
            setErrors(tempErrors)
        }
    };

    // function to synchronously check for missing form inputs
    function handleErrors() {
        const tempErrors = []

        if (newEntry.mood === "") {
            tempErrors.push("Select a mood!");
        }
        if (newEntry.activity === ""){
            tempErrors.push("Select an activity!");
        }
        return tempErrors ;
    };


    return (
        <div className="new-entry-form">
            <h2>Add Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <select name="mood" value={newEntry.mood} onChange={handleChange}>
                    <option value="">Select Mood</option>
                    <option value="great">Great</option>
                    <option value="good">Good</option>
                    <option value="meh">Meh</option>
                    <option value="bad">Bad</option>
                    <option value="awful">Awful</option>
                </select>
                <select name="activity" value={newEntry.activity} onChange={handleChange}>
                    <option value="">Select Activity</option>
                    <option value="Meditation">Meditation</option>
                    <option value="Walking">Walking</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Retreat">Retreat</option>
                    <option value="None">None</option>
                </select>
                <p>Activity Duration (minutes):
                <input 
                    type="number"
                    name="duration"
                    onChange={handleChange}
                    value={newEntry.duration}
                />
                </p>
                <textarea 
                    placeholder="Description"
                    name="description"
                    value={newEntry.description}
                    onChange={handleChange}
                />
                <button type="submit">Add Entry</button>
            </form>
            {/* conditionally render error messages */}
            {errors.length > 0
                ? errors.map((error, index) => (
                    <p key={index} style={{color: "red"}}>
                        {error}
                    </p>
                ))
                : null }

        </div>
    )
};

export default AddJournalForm;