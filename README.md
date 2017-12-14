# rest-service

A barebones Node.js app using [Express 4](http://expressjs.com/).


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/amilam/rest-service.git
$ cd rest-service
$ npm install express express-basic-auth
$ node index.js
```

Your app should now be running on [localhost:5000](http://localhost:5000/).
This is secured with following credentials.
username: admin
password: admin

If you try http://localhost:5000/hello?name=john you will not see anything in the browser because it is unauthorized. But, if you try with the following curl command you will get a response.
curl -v -X GET -H "Authorization:Basic YWRtaW46YWRtaW4=" 'http://localhost:5000/hello?name=amila'

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
