const passport = require('passport')
const router = require("express").Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
var db = require('../models');
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");


router.use(
    cookieSession({
      name: "session",
      keys: [keys.COOKIE_KEY],
      maxAge: 24 * 60 * 60 * 100
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
        res.redirect('http://localhost:3000')
        console.log('done')
    });



module.exports = router;