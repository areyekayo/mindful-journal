import App from "./components/App";
import AddJournalForm from "./components/AddJournalForm";
import JournalList from "./components/JournalList";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/entries",
                element: <JournalList />
            },
            {
                path: "/newEntry",
                element: <AddJournalForm />
            }
        ]
    }
];

export default routes