# NoSQL-Socal-Network-API

## Description

For this week's challenge we had to create an API for social media web applications where users can share their thoughts, react to friends thoughtys and create a friend list. 

## Features

* The Social network API that uses MongoDB, a NoSQL database, allows the website to handle large amounts of unstructured data

* When the command to invoke the application is entered, the Mongoose models are synced to the MongoDB database

* When API GET routes users and thoughts are opened in Insomnia. the data for each of the routes is displatyed in formatted JSON

* User, Friend, Thought and Reaction routes are created in the database and tests the API in Insomnia

* User Routes: users can be created with a username and valid email address. When created the user is assigned with a unique user ID.

* Friend Routes: a user can add a friend and delete a friend

* Thought Routes: a user can create a thought, get all thoughts or a single thought by ID, update a thought by ID, and delete a thought by ID

* Reaction Routes: a user can create a reaction and delete a reaction

## Installation

1. Download or clone the repository to use this application on your local machine

2. Node.js and MongoDB are required to run the application

3. To install necessary dependencies, navigate to the root directory and run 'npm i'

## Usage

After Installation: 
* To invoke the application, run npm start
* When the server has started, the Mongoose models are synched to the MongoDB database
* Open MongoDB and connect to the MongoDB URI mongodb://localhost:27017. On the list of databases, click on socialDB to see thoughts and users data.

## Technologies

* JavaScript
* Express.js
* Node.js
* MongoDB
* Insomnia
* DateJS

## Demo

https://drive.google.com/file/d/1QksQgS_K0hVATjG4dI_BToRIMei-pTcJ/view