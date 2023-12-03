# atnistage
atni app with config such that it can run in both file and DB mode,

Prerequisites:
NodeJS: version? (take latest and see from there)
in package.json node engine is set to 16.x

Setup:
- Checkout the module
- cd atnistage
  - npm install (This should install all the packages necessary)
- get atnistage/.env from admin (this will have two keys)
  a. MONGO_URI
  b. ENV (=STAGE will read from file stnistage/newsdataJSON.js, =PROD will read from mongodb)
- go to atnistage/client/src/components/Capsule.jsx
- change ip address in fetchAPIURL = 'http://192.168.1.36:3002/api/news' (In case you need to change port, edit atnistage/server.js "const PORT = process.env.PORT || 3002;")

Servers (port 3002)
- backend
  - cd atnistage
    - npx nodemon server.js

- client (port 3000)
  - cd atnistage/client
    - npm start

access app on http://localhost:3000/