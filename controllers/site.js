'use strict'


function index (req, h) {
  return h.view('index', {
    title: 'index'
  })
}
function home (req, h) {
  return h.view('home', {
    title: 'home',
    user: req.state.user
  })
}

function registerTeacher (req, h) {
  return h.view('register-teacher', {
    title: 'Registro Docente'
  })
}
function registerStudent (req, h) {
    return h.view('register-student', {
      title: 'Registro Estudiante'
    })
}
function registerPublicServer (req, h) {
  return h.view('register-public-server', {
    title: 'Registro Servidor Público'
  })
}
function registerFootballSchoolU (req, h) {
  return h.view('register-football-school-u', {
    title: 'Registro Escuela de Futbol UPTC'
  })
}
function registerCompany (req, h) {
  return h.view('register-company', {
    title: 'Registro Empresa'
  })
}
function registerEducationEntity (req, h) {
  return h.view('register-education-entity', {
    title: 'Registro Entidad de Educación'
  })
}
function registerParticular (req, h) {
  return h.view('register-particular', {
    title: 'Registro Usuario Particular'
  })
}
function registerSportSchool (req, h) {
  return h.view('register-sport-school', {
    title: 'Registro Escuela de Formación Deportiva'
  })
}
function  login(req, h) {
  return h.view('login', {
    title: 'login'
  })
}

module.exports = {
  index:index,
  home: home,
  login:login,
  registerTeacher: registerTeacher,
  registerStudent: registerStudent,
  registerPublicServer: registerPublicServer,
  registerFootballSchoolU: registerFootballSchoolU,
  registerCompany: registerCompany,
  registerEducationEntity: registerEducationEntity,
  registerParticular: registerParticular,
  registerSportSchool: registerSportSchool
}
