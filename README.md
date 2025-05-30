# Mindful Journal

Mindful Journal helps users track their mindfulness activities and moods through daily journal entries. Users can also view statistics about their entries, including total mindful minutes, and mood and activity distributions.

# Features

- Add journal entries with a mindful activity (yoga, meditation, walking, retreat), duration of the activity, a mood, and a description.
- View stats of journal entries.

# Installation

1. Fork and clone this repository.

2. Install dependencies:
`npm install`

3. Set up JSON Server:

Start the JSON server using your db.json file (a sample db.json is provided):

`json-server --watch db.json`

The json server will open at http://localhost:3000

4. Run the React app:

`npm start`

The app will open at http://localhost:3001 and connect to your json-server.

## Usage
Navigate between Journal entries, Add Entry form, and Stats using the navbar.
Add new journal entries using the form; select mood, activity, duration, and description.
View all entries on the Journal page, each displayed via journal cards.
Review statistics on total entries, mindful minutes, mood distribution, and activities.

## Contributing
Contributions are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## MIT License
Copyright (c) 2025 Riko Fluchel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
