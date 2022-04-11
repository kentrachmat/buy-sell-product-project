// email content details

const emailSender = require("../config/email.config")
let from_i = emailSender.emailFrom
let title_i = ""
let body_i = ""
let to_i = ""

/**
 * set email variable
 * @param {*} msg email to be set
 */
const setEmail = (msg) => {
  to_i = msg
}

/**
 * set title variable
 * @param {*} msg title to be set
 */
const setTitle = (msg) => {
  title_i = msg
}

/**
 * set body variable
 * @param {*} msg body to be set
 */
const setBody = (msg) => {
  body_i = msg
}

/**
 * send the email to the destination using transporter
 * @param {*} _ unuse variable
 */
const send = async (_) => {
  await emailSender.transporter.sendMail(
    { from: from_i, to: to_i, subject: title_i, html: body_i },
    function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    }
  )
}

/**
 * registration text
 * @param {*} user username
 * @param {*} pass password
 * @param {*} name full name
 * @returns
 */
const FR_REGISTRATION = (user, pass, name) => {
  return `
Bonjour ${name},<br><br>Merci de vous etre inscrit a notre projet de JSFS ! <br>
Dans notre application web, vous pouvez vendre et acheter vos objets et interagir avec différents types de fonctions. <br>
n'hesitez pas a contacter l'administrateur dans la boîte de discussion si vous avez besoin d'aide. voici le nom d'utilisateur et le mot de passe que vous avez saisi lors de notre inscription a notre application : <br><br>
nom d'utilisateur : ${user}<br>
mot de passe : ${pass}<br><br>

Sincerement,<br>
Administrateur de projet`
}

/**
 * reset password text
 * @param {*} user username
 * @param {*} pass password
 * @param {*} name full name
 * @returns
 */
const FR_RESET = (user, pass, name) => {
  return `
Bonjour ${name},<br><br>
Votre mot de passe a été réinitialiser avec une chaîne aléatoire, vous pouvez le changer à nouveau dans l'application<br>
nom d'utilisateur : ${user}<br>
<b>nouveau mot de passe</b> : ${pass}<br><br>

Sincerement,<br>
Administrateur de projet`
}

/**
 * update password text
 * @param {*} password password
 * @returns
 */
const FR_UPDATE_PASSWORD = (password) => {
  return `
Bonjour,<br><br>
Votre mot de passe a été mis à jour !

<br>
<b>nouveau mot de passe</b> : ${password}<br><br>

Sincerement,<br>
Administrateur de projet`
}

/** module exports */
module.exports.setEmail = setEmail
module.exports.setTitle = setTitle
module.exports.setBody = setBody
module.exports.send = send
module.exports.FR_REGISTRATION = FR_REGISTRATION
module.exports.FR_RESET = FR_RESET
module.exports.FR_UPDATE_PASSWORD = FR_UPDATE_PASSWORD
