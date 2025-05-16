import App from "./components/App";
import AddJournalForm from "./components/AddJournalForm";
import JournalList from "./components/JournalList";
import MindfulStats from "./components/MindfulStats";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <JournalList />
            },
            {
                path: "/newEntry",
                element: <AddJournalForm />
            },
            {
                path: "/stats",
                element: <MindfulStats />
            }
        ]
    }
];

export default routes