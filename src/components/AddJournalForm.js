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
        <div>
            {console.log(newEntry)}
        </div>
    )
};

export default AddJournalForm;