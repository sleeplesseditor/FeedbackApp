const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//Use of MongoDB-generated user ID for multiple social media ID signin options
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//PassportJS Strategies
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true            
        }, 
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                //Record with given profile ID exists
                return done(null, existingUser);
            } 
                //Record with given profile ID doesn't exist, make new record
                const user = await new User({ googleId: profile.id }).save()
                done(null, user);
        }
    )
);
