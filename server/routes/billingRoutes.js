const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

//Creates charge to user credit card
module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        //Updates user credit balance
        req.user.credits += 5;
        //Updates user model
        const user = await req.user.save();

        res.send(user);
    });
};