const passport = require('passport')
const router = require("express").Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
var db = require('../models');
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");


router.use(
    cookieSession({
      name: "session",
      keys: [keys.COOKIE_KEY],
      maxAge: 2 * 60 * 60 
    })
  );

  //CORS
router.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

router.use(cookieParser());

// initalize passport
router.use(passport.initialize());
// deserialize cookie from the browser
router.use(passport.session());



passport.use(new GoogleStrategy({
    clientID: keys.googleAuthClientID,
    clientSecret: keys.googleAuthSecret,
    callbackURL: '/auth/google/callback'
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        db.Supuser.create({ googleId: profile.id, name: profile.displayName }, function (err, user) {
            return cb(err, user);
        });
    }
))

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};


router.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});


// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // deserialize the cookieUserId to user in the database
  passport.deserializeUser((id, done) => {
    db.Supuser.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(e => {
        done(new Error("Failed to deserialize an user"));
      });
  });


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/google/callback',
    passport.authenticate('google'),
    function (req, res) {
        res.redirect('http://localhost:3000/')
        console.log('done')
    });


module.exports = router;