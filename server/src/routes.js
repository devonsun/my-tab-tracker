// routes are used to point to the controllers

const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // Create an endpoint
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
