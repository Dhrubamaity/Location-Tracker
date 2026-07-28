# Location Tracker

A simple real-time location sharing app built with Node.js, Express, EJS, Socket.IO, and Leaflet. It allows connected users to share their location and view it on a live map.

## Features

- Real-time location updates using Socket.IO
- Interactive map display with Leaflet
- Simple Express server and EJS views
- Static assets served from the public folder

## Project Structure

```text
Location-Tracker/
├── app.js
├── package.json
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── views/
    └── index.ejs
```

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

## Run the App

Start the server:

```bash
node app.js
```

Then open your browser at:

```text
http://localhost:3000
```

## Technologies Used

- Node.js
- Express
- EJS
- Socket.IO
- Leaflet

## Notes

The app listens on port 3000 by default.
