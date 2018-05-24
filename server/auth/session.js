var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
  uri: "steveo:steveo@ds135540.mlab.com:35540/steveo-musicvue'", //CHANGE ME!!!!!!
  collection: "Sessions"
});

store.on("error", function(err) {
  console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
  secret: "The answer is not!!!!42 it is !!!!!", //CHANGE ME!!!!
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;