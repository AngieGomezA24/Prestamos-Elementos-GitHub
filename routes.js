'use strict'

const Joi = require('joi')
const site = require('./controllers/site')
const user = require('./controllers/user')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: site.index
  },
  {
    method: 'GET',
    path: '/home',
    handler: site.home
  },
  {
    method: 'GET',
    path: '/register-teacher',
    handler: site.registerTeacher
  },
  {
    method: 'GET',
    path: '/register-student',
    handler: site.registerStudent
  },
  {
    method: 'GET',
    path: '/register-public-server',
    handler: site.registerPublicServer
  },
  {
    method: 'GET',
    path: '/register-football-school-u',
    handler: site.registerFootballSchoolU
  },
  {
    method: 'GET',
    path: '/register-company',
    handler: site.registerCompany
  },
  {
    method: 'GET',
    path: '/register-education-entity',
    handler: site.registerEducationEntity
  },
  {
    method: 'GET',
    path: '/register-particular',
    handler: site.registerParticular
  },
  {
    method: 'GET',
    path: '/register-sport-school',
    handler: site.registerSportSchool
  },
  {
    method: 'GET',
    path: '/login',
    handler: site.login
  },
  {
    method: 'POST',
    path: '/validate-user',
    handler: user.validateUser
  },
  {
    method: 'POST',
    path: '/create-user',
    handler: user.createUser
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        index: ['index.html']
      }
    }
  }
]
