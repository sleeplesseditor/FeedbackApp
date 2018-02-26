const passport = require('passport');

module.exports = (app) => {
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
}

