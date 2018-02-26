const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//PassportJS Strategies
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log( {accessToken, refreshToken, profile} );
        }
    )
);

//Route Handler – select aspects of user account via scope
app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get(
    '/auth/google/callback', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//Server Ports
const PORT = process.env.PORT || 5000;
app.listen(PORT)
    console.log('Server has started');