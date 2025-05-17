import JournalCard from "./JournalCard";
import { useOutletContext } from "react-router-dom";

function JournalList(){
    //get entries from Outlet Context
    const {entries} = useOutletContext();

    return (
        <div>
            {entries.map((entry) => (
            <JournalCard
                key={entry.id}
                date={entry.date}
                mood={entry.mood}
                activity={entry.activity}
                duration={entry.duration}
                description={entry.description} 
            />
            ))}
        </div>
    )
};

export default JournalList;