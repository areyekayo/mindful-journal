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

    const activityCounts = entries.reduce((acc, entry) => {
        acc[entry.activity] = (acc[entry.activity] || 0) + 1;
        return acc;
    },{});

    return (
        <div className="stats">
            <h1>Mindful Journal Stats</h1>

            <h3>You've written {entryCount} entries</h3>
            <h3>You've had {totalMindfulMinutes} mindful minutes</h3>
            
            <h3>You felt...</h3>
           <ul>
                <li>great {moodCounts.great || 0} times</li>
                <li>good {moodCounts.good || 0} times</li>
                <li>meh {moodCounts.meh || 0} times</li>
                <li>bad {moodCounts.bad || 0} times</li>
                <li>awful {moodCounts.awful || 0} times</li>
           </ul>

           <h3>You did...</h3>
           <ul>
                <li>Yoga {activityCounts.Yoga || 0} times</li>
                <li>Meditation {activityCounts.Meditation || 0} times </li>
                <li>Walking {activityCounts.Walking || 0} times</li>
                <li>Retreat {activityCounts.Retreat || 0} times</li>
           </ul>
        </div>
    )
};

export default MindfulStats;