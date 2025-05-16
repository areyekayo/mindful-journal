import JournalCard from "./JournalCard";

function JournalList({entries}){

    //console.log("entries in journal list", entries)

    return (
        <div>
            {entries.map((entry) => (
        <JournalCard
            key={entry.id}
            date={entry.date}
            mood={entry.mood}
            activity={entry.activity}
            duration={entry.duration}
            description={entry.description} />
    ))}
        </div>
    )
};

export default JournalList;