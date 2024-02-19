# ITWox Interview Process

Hello & welcome to the ITWox interview process! We are glad you have reached this stage & excited to see how you approach the problem statement below:

## What you will build

Create a React or React Native or Expo or NextJS app using Typescript for any of these project types.

### Screens

1. **Home**
   - Default landing page
   - Should have a top navigation bar
     - When user is not signed in: should have a top navigation bar with a "sign in" link, which links to `/sign-in`
     - When user is signed in: should have a top navigation bar with a "dashboard" link to `/dashboard` & a "sign out" button which will sign out the user when clicked

2. **Dashboard**
   - Should have a top navigation bar
   - Should be accessible only if the user is signed in
   - Should have a title "Dashboard"
   - Should fetch a list of posts & its comments from:
     - Posts API - [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
     - Comments API - [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)
   - The list of posts can be displayed either as a table or as a list of cards, with a count of its comments
   - List of posts should be paginated to show 10 records with an ability to move to next/previous page
   - Ensure the API URLs are stored in proper environment files as required

3. **Sign In**
   - Should NOT have a top navigation bar
   - Should allow the user to enter a username & password (both required fields, username should be an email address)
   - Should validate input
   - When user clicks the "submit" button, it should login & redirect to the `/dashboard` if everything is successful

### State Management
Use Redux or MobX or React Context API to manage state of the user login. Post sign in, if the screen is refreshed, the user login state should remain.

### Unit Testing
Write unit tests using any framework of your choice to test the UI components & the client State. Integrate your test script into the `package.json` so that it can be triggered from `npm test` command.

### UI Styling
Use any of the open source CSS toolkits (e.g.: Bootstrap, w3css etc.), if you want to improve the UI or feel free to write your own.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Scripts

- `npm start`: Start the development server.
- `npm test`: Run unit tests.
- `npm build`: Build the project for production.

Feel free to reach out if you have any questions or need further clarification. Good luck with your project! 🚀
