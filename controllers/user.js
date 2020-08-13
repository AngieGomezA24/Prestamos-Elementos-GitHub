'use strict'

const users = require('../models/index').users

async function createUser (req, h) {
  let result
  try {
    result = await users.create(req.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas creando el usuario').code(500)
  }

  return h.response(`Usuario creado ID: ${result}`)
}

async  function validateUser(req, h) {
  let result
  try {
    result = await users.validateUser(req.payload)
    if(!result){
      h.response('Email y/o Contraseña incorrectos').code(401)
    }
  } catch (error) {
    console.error(error)
    return h.response('Problemas validando el usuario').code(500)
  }

  return h.redirect('/home').state('user',{
    user: result.user,
    email: result.email

  })
}

module.exports = {
  createUser: createUser,
  validateUser: validateUser
}
