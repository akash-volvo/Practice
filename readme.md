# Node.js, Express.js, and WebDriverIO Practice Repository

This repository serves as a practice ground for building a simple web application using Node.js, Express.js, and WebDriverIO.


## Features

- **Index Page**: 
  - Welcomes users to Volvo with a heading and provides information about Volvo cars.
  - Includes buttons for registration and login.

- **Registration Screen**:
  - Allows users to register with a username and password.
  - Displays a Bootstrap alert upon successful registration.
  - User data is stored in the backend using a hashmap.

- **Login Screen**:
  - Users can log in using their registered credentials.
  - Authentication is performed against the hashmap.
  - Upon successful login, users are directed to a home screen with a personalized welcome message.
  - The home screen features an image of a Volvo car.


## Technologies Used

- Node.js
- Express.js
- WebDriverIO
- Bootstrap


## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the server by running `node server.js`.
5. Open a new terminal tab and execute `npm run wdio` to run WebDriverIO tests.

