const express = require('express');
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Store tasks in memory (for simplicity)
const tasks = [];

// Configure nodemailer with Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const { task, time } = req.body;

  // Store the task in memory (in a real app, store in a database)
  tasks.push({ task, time });

  // Schedule an email reminder
  const reminder = schedule.scheduleJob(new Date(time), function () {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'arshad.amp432@gmail.com',
      subject: 'Task Reminder',
      text: `Task: ${task}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
