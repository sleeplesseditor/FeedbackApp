# Feedback App

This is a fullstack (MERN) app built using React, Redux, Node, Express, Google OAuth (with cookie-based authentication), PassportJS, MongooseJS, Materialize CSS, and MongoDB (using mLab and AWS for remote database hosting) for collecting feedback. In addition, it uses SendGrid for sending emails, and payment handling via Stripe. Webhooks are handled with localtunnel. Guidance for building this app and understanding the concepts behind each component came from [Stephen Grider's Udemy course](https://www.udemy.com/node-with-react-fullstack-web-development).

The React front-end components were built using the [create-react-app](https://github.com/facebook/create-react-app).

To get the app up and running, follow these steps:

1) cd FeedbackApp
2) npm install
3) npm run dev

A live version of the app can be seen [here](http://nameless-retreat-85346.herokuapp.com/).


![screen shot 2018-03-12 at 00 58 03](https://user-images.githubusercontent.com/25869284/37261021-eb7cbf92-2590-11e8-947e-d82c6f061246.png)

Landing page


![screen shot 2018-03-12 at 00 58 14](https://user-images.githubusercontent.com/25869284/37261032-f8f4f77a-2590-11e8-92e7-8f571f6fe9c6.png)

Dashboard page


![screen shot 2018-03-12 at 01 02 34](https://user-images.githubusercontent.com/25869284/37261048-176be5ec-2591-11e8-8e5d-0254dd2d74b0.png)

Stripe payment page

The app is not currently responsive for mobile devices, but has plenty of potential for further development.
