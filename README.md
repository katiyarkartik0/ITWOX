# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Name

Description of your React TypeScript Project.

## Table of Contents

- [Screens](#screens)
  - [Home](#home)
  - [Dashboard](#dashboard)
  - [Sign In](#sign-in)
- [State Management](#state-management)
- [Unit Testing](#unit-testing)
- [Environment Variables](#environment-variables)
- [APIs](#apis)

## Screens

### Home

- Default landing page.
- Top navigation bar.
- When user is not signed in:
  - User have a "Sign In" link in the navigation bar, which links to `/sign-in`.

### Dashboard

- Top navigation bar.
- Accessible only if the user is signed in.
- Title: "Dashboard".
- Fetch a list of posts & comments from:
  - Posts API: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
  - Comments API: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)
- Display the list of posts cards with a count of comments.
- Paginate the list of posts to show 10 records with an ability to move to the next/previous page.

### Sign In

- No top navigation bar.
- The user can enter a username & password (both required fields, username should be an email address).
- Validate input.
- When the user clicks "Submit," it login & redirect to "/dashboard" if everything is successful.

## State Management

- Redux is used to manage the state of the user login.
- Post sign-in, if the screen is refreshed, the user login state remains.

## Unit Testing

- Unit tests using Jest and React Testing Library for UI components.
- Integrated test script into the `package.json` so that it can be triggered from `npm test` command.

## Environment Variables

- Ensured the API URLs are stored in proper environment files as required.

## APIs

- Posts API: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- Comments API: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)

