# Mindful Journal

## Description

Mindful Journal is a single-page React application designed to help users track their mindfulness activities and moods through daily journal entries. The app features multiple client-side routes for journaling, adding new entries, and viewing statistics about mindful minutes, moods, and activities. Data is persisted using a `json-server` backend with RESTful API endpoints. The app uses React Router for navigation and includes custom styling for an engaging user experience.

## Features

- Add journal entries with a mindful activity, duration of activity, mood, and a description
- View stats of mindful journal entries

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
Install dependencies:

npm install
Set up JSON Server:

Install json-server globally if you don’t have it:

npm install -g json-server
Start the JSON server using your db.json file (make sure it contains an entries array):

json-server --watch db.json --port 3000
Run the React app:

npm start
The app will open at http://localhost:3001 and connect to your json-server.

## Usage
Navigate between Journal entries, Add Entry form, and Stats using the navbar.
Add new journal entries using the form; select mood, activity, duration, and description.
View all entries on the Journal page, each displayed via journal cards.
Review statistics on total entries, mindful minutes, mood distribution, and activities.

## Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create your feature branch (git checkout -b feature/my-feature).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/my-feature).
Open a Pull Request.
Please ensure your code passes tests and adheres to the existing style. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for details.