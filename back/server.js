const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const fs = require('fs')
const sqlite = require('sqlite')

const dbPromise = require('./db')
const characters = require('./characters')
const filldb = require('./filldb')
const fileEncoding = 'utf8'

const app = express()
const port = process.env.PORT || 2222

app.use(express.static('public'))
app.use(methodOverride('__method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const html = `
<!doctype html>
<html class='no-js' lang=''>
  <head>
    <meta charset='utf-8'>
    <title>Adopte un wookie</title>
    <link rel='stylesheet' href='CSS/bootstrap.min.css'>
    <link rel='stylesheet' href='CSS/style.css'>
  </head>
  <body>
    <div class='container-fluid'>
      <div class='row justify-content-center'>
        <div class='col-12'>
          <img style='width:50%' id='mainImage' src='https://media.giphy.com/media/oeGgcmHVHLVCg/giphy.gif' />
        </div>
      </div>
    </div>
    <div id='main'></div>
    <script src='/app.js'></script>
    <script src='JS/bootstrap.min.js'></script>
  </body>
</html>
`

// Read all the database and return it
const getCharactersFromDb = async () => {
  const db = await dbPromise
  const allCharactersSQLStatement = 'SELECT * FROM users'
  return db.all(allCharactersSQLStatement)
}

// Read all account and return it
const getAccountFromDb = async () => {
  const db = await dbPromise
  const allAccountSQLStatement = 'SELECT * FROM account'
  return db.all(allAccountSQLStatement)
}

// Insert data about profile in the table ACCOUNT
const insertProfileInDb = async (pseudo, password) => {
  const db = await dbPromise
  let randomID = Math.floor(Math.random() * Math.floor(88))
  const insertProfileSQLStatement = `INSERT INTO account (pseudo, password, userID) VALUES (${req.body.pseudo}, ${req.body.password}, ${randomID});`
  return db.run(insertProfileSQLStatement)
}

// New GET / route
app.get('/', (req, res) => {
  res.send(html)
  res.end()
})

// New GET /characters route
app.get('/characters', (req, res) => {
  getCharactersFromDb().then(function (value) { res.send(value).end() })
})

// New GET /account route
app.get('/account', (req, res) => {
  getAccountFromDb().then(function (value) { res.send(value).end() })
})

// New POST /account route
app.post('/account', (req, res) => {
  insertProfileInDb().then(function (value) { res.send(value).end() })
})

app.listen(2222, async () => {
  const db = await dbPromise
  db.run('PRAGMA foreign_keys=ON')
})

module.exports = app
