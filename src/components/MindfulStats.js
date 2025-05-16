import { useOutletContext } from "react-router-dom";

function MindfulStats(){

    const { entries } = useOutletContext();

    const entryCount = entries.length

    const totalMindfulMinutes = entries.reduce((acc, entry) => {
       return acc += Number(entry.duration);
    }, 0);

    const moodCounts = entries.reduce((acc, entry) => {
        if (!acc[entry.mood]){
            acc[entry.mood] = 1
        }
        else {
            acc[entry.mood] += 1
        };
        return acc;
    },{});

    console.log("mood counts", moodCounts)

    return (
        <div className="stats">
            <p>{entryCount} entries</p>
           <p>Total mindful minutes: {totalMindfulMinutes}</p>
            <p>You felt...</p>
           <ul>
                <li>great {moodCounts.great} times</li>
                <li>good {moodCounts.good} times</li>
                <li>meh {moodCounts.meh} times</li>
                <li>bad {moodCounts.bad} times</li>
                <li>awful {moodCounts.awful} times</li>
           </ul>
        </div>
    )
};

export default MindfulStats;