import "../index.css"

function JournalCard({date, mood, activity, duration, description}) {


    return (
        <div className="card">
            <h2>{date}</h2>
            <p>Mood: {mood}</p>
            <p>Activity: {activity}</p>
            <p>Duration: {duration}</p>
            <p>{description}</p>
        </div>
    )
};

export default JournalCard ;