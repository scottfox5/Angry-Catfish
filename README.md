# Angry Catfish

This is a MEAN stack web based application for Angry Catfish bike shop to rent bikes to their customers and allow Angry Catfish to add, update, and delete bikes from their inventory. It also allows Angry Catfish to view all reservations, including the ability to view analytics regarding past rentals based on dates and specific bike information.

## Author: Scott Fox, Brian Schorn, Tyler Herman, Erik Noonan

## URL: coming soon

## Date: 21 March 2017

### Technology used:

- HTML5
- CSS3
- Bootstrap
- JavaScript
- AngularJS
- Node.js
- Express
- MongoDB
- Mongoose
- Passport - Google Authentication
- Amazon Web Services: S3 (image hosting)
- Mailgun (email service)

### Setup:
- Install node.js and mongoDB
- Clone the repo
- Change names of the files in config folder to auth.js and database.js (simply remove the underscore from current file names)
- Edit auth.js file with your googleAuth information and edit database.js file with your database location
- Change name of .env file (simply remove the underscore) and edit file with proper values for AWS S3 image hosting
- Be sure to put your auth.js, database.js, and .env files in your .gitignore file
- npm install
- Run application on localhost:3000
