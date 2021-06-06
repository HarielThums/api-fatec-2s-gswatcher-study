const path = require('path')
const nodemailer = require('nodemailer')
const { host, user, pass } = require('../config/mail.json')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
    service: 'gmail',
    host,
    auth: { user, pass }
  });

transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'), // resolve parte sempre da raiz absoluta do projeto.
    extName: '.html'
}))

  module.exports = transport