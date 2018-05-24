var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())

require('./db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))

// to be added later for authenication
//let auth = require('./auth/routes')
// app.use(auth.session)
// app.use(auth.router)

// app.use((req, res, next)=>{
//     if (!req.session.uid) {
//         return res.status(401).send({
//             error: 'please login to continue'
//         })
//     }
//     next()
// ))

var XXX = require('./routes/XXX')
app.use(XXX.router)


app.get('*', (req, res, next) =>{
  res.status(404).send({
      error: 'No matching routes'
  })
})

app.listen(port, () => {
    console.log('server running on port', port)
})