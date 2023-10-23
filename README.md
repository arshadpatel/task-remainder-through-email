# Task Reminder App

The Task Reminder App is a simple Node.js application that allows users to add tasks with specific time reminders. When the time for a task reminder arrives, the app sends an email to the user with the task details. This README provides an overview of the project, its components, and how to set it up.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to set up and run the Task Reminder App:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arshadpatel/task-remainder-through-email.git
2. **Navigate to the project directory:**
   ```bash
   cd task-reminder-app

3. **Install the project dependencies:**

   ```bash
   npm install
4. **Create a .env file in the project root and add your Gmail credentials:**

   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-password
   PORT=3000
Replace your-email@gmail.com and your-password with your Gmail email and password. Make sure to enable "Less secure apps" in your Gmail settings if you're using a Gmail account.

5. **Start the application:**

   ```bash
   npm start
The app will start and be accessible at `http://localhost:3000` by default. You can change the `PORT` value in the `.env` file.

# Task Reminder App

The Task Reminder App is a simple Node.js application that allows users to add tasks with specific time reminders. When the time for a task reminder arrives, the app sends an email to the user with the task details. This README provides an overview of the project, its components, and how to use it.

## Usage

1. Access the Task Reminder App
   - Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) (or the custom port you've set in the `.env` file).

2. Add Tasks
   - You can add tasks with specific reminder times.
   - Enter the task details and the time you want to be reminded.
   - Click the "Add Task" button.

3. Email Reminders
   - The app will schedule email reminders for your tasks.
   - When the time for a reminder arrives, you will receive an email with the task details.

## Project Structure

The project is organized as follows:

- `app.js`: The main application file that sets up the Express.js server and handles routing.
- `views`: Contains Handlebars templates for rendering the web pages.
- `public`: Holds static files (stylesheets, scripts, etc.) for the web interface.
- `package.json` and `package-lock.json`: Define project dependencies and scripts.
- `.env`: Configuration file for storing sensitive data (Gmail credentials and port).

## Dependencies

The following libraries and packages are used in this project:

- [Express.js](https://expressjs.com): A web application framework for Node.js.
- [Body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing request bodies.
- [Node-schedule](https://www.npmjs.com/package/node-schedule): A package for scheduling tasks.
- [Nodemailer](https://www.npmjs.com/package/nodemailer): A module for sending email.
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars): A template engine for Express.js.
- [dotenv](https://www.npmjs.com/package/dotenv): A module for loading environment variables from a .env file.

## Notes

- This project is a simple example and is not intended for production use without additional security and error handling measures.
- Gmail credentials are sensitive information. It's recommended to use app-specific passwords or OAuth2 for more secure authentication in a production environment.
- This app stores tasks in memory. In a production app, tasks should be stored in a database for persistence.

Feel free to modify and extend this project to suit your needs. Happy coding!
