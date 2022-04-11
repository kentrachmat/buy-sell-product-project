// email validation function

/**
 * returns true if the email valid, false otherwise
 * @param {*} email the user tmail
 * @returns true if the email valid, false otherwise
 */
const validateEmail = async (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

/** module exports */
module.exports.validateEmail = validateEmail
