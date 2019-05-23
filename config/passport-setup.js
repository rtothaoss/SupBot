const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys')
const Supuser = require('../models/Supuser')





// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
    Supuser.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(e => {
        done(new Error("Failed to deserialize an user"));
      });
  });

  passport.use(new GoogleStrategy({
    clientID: keys.googleAuthClientID,
    clientSecret: keys.googleAuthSecret,
    callbackURL: '/auth/google/callback'
},
    async (accessToken, refreshToken, profile, done) => {
        const currentUser = await Supuser.findOne({
            googleId: profile.id
        });
        if (!currentUser) {
            const newUser = await new Supuser({
                googleId: profile.id,
                name: profile.displayName
            }).save();
            if (newUser) {
                done(null, newUser)
            }
        }
        done(null, currentUser)
    }
)
);