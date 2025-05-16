import { useOutletContext } from "react-router-dom";

function MindfulStats(){

    const { entries } = useOutletContext();

    const entryCount = entries.length

    const totalMindfulMinutes = entries.reduce((acc, entry) => {
       return acc += Number(entry.duration);
    }, 0);

    const moodCounts = entries.reduce((acc, entry) => {
        acc[entry.mood] = (acc[entry.mood] || 0) + 1;
        return acc;
    },{});

    return (
        <div className="stats">
            <h1>Mindful Journal Stats</h1>

            <h3>{entryCount} entries</h3>
            <h3>{totalMindfulMinutes} mindful minutes</h3>
            <h3>You felt...</h3>
           <ul>
                <li>great {moodCounts.great || 0} times</li>
                <li>good {moodCounts.good || 0} times</li>
                <li>meh {moodCounts.meh || 0} times</li>
                <li>bad {moodCounts.bad || 0} times</li>
                <li>awful {moodCounts.awful || 0} times</li>
           </ul>
        </div>
    )
};

export default MindfulStats;