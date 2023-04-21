const express = require('express')
const userControllers = require('../controllers/user.controller')
const router = express.Router()

router.route('/')

    /**
      * @api {get} /tools All tools
      * @apiDescription Get all the tools
      * @apiPermission admin
      *
      * @apiHeader {String} Authorization   User's access token
      *
      * @apiParam  {Number{1-}}         [page=1]     List page
      * @apiParam  {Number{1-100}}      [limit=10]  Users per page
      *
      * @apiSuccess {Object[]} all the tools.
      *
      * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
      * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
      */

    .get()

    /**
    * @api {get} /user  save a user
    * @apiDescription post a user for sign up
    * @apiPermission a new user who want to signup
    *
    * @apiHeader 
    *
    * @apiParam  {Number{1-}}         [page=1]     List page
    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
    *
    * @apiSuccess {Object} success message with user saved data
    *
    * @apiError (Unauthorized 401)  required  email/password/confirmPassword required
    
    */

    .post(userControllers.signUp)

module.exports = router