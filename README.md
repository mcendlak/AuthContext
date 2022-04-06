# Authorization with Context API
#### React.js + TypeScript
## Guidelines
To create a simple authorization system with following features:
1. its functionality is based on Context API (useContext)
2. Contains a validated form with fields for user e-mail address and password
3. After entering correct data saves a cookie with information about authorization (after refreshing the page, user remains logged in)
4. After entering the main route ('/') the user is redirected either to the '/login' or '/dashboard' routes based on information from cookies
5. After logging out information about authorization is deleted from cookies and the user has to enter correct data again.
## Used packages
1. React Router v6
2. Formik + Yup
3. js-cookie
4. Lodash

## Running the project
In the project directory, install all the packages with the command:
`npm install`
Afterwards run the project with the command:
`npm start`
The App should by default run on http://localhost:3000

Credentials for test purposes are:
- e-mail address: *jankowalski@gmail.com*
- password: *admin12345@*