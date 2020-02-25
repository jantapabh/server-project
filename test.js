// var express = require('express')
// var app = express()
// var session = require('express-session')

//                          // sign cookie (for a session)
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
//    resave : false, saveUninitialized: false }))
//    // resave => Forces the session to be saved back to the session store, even if the session was never modified 
//    // saveUninitialized => the cookie will not be set on a response with an uninitialized session

// app.use(function(req, res, next) {
//    var sess = req.session
//    if (sess.views) {
//        sess.views++
//    } else {
//        sess.views = 1
//    }
//    console.log(sess.views)
//    next();
// })
// app.get('/',function(req, res) {
//    res.send('count =' + req.session.views)
// })
// app.listen(8000)


var express = require('express')
var app = express()ว


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/fruit', function (req, res) {
    res.render('fruit', { fruits: ['banana', 'apple'], foo: 'bar' })
})

app.listen(8000)