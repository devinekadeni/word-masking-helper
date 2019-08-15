/**
 * Masking `Email` to `*` (default)
 *
 * @param {String} fullText Words that contain `email`.
 * @param {String} replacement Masking replacement icon.
 * @returns {String} Returns the `fullText` but changed the `email` into `replacement` if there is any `email`.
 */
const maskingEmail = (fullText, replacement = '*') => {
  const regexEmail = /([a-z0-9_.-]+)@([da-z.-]+)\.([a-z.]{2,6})/gm
  const listEmail = fullText.match(regexEmail)

  if (listEmail && listEmail.length) {
    // new list of masked email
    const newListEmail = listEmail.map(email => {
      const [name, mail] = email.split('@')

      // Masking the name of email
      const slicedName = name.length > 3 ? name.slice(1, name.length - 1) : name
      const maskedName = name.replace(slicedName, replacement.repeat(slicedName.length))

      // Masking the mail of email
      const slicedEmail = mail.length > 3 ? mail.slice(1, mail.length - 3) : mail
      const maskedMail = mail.replace(slicedEmail, replacement.repeat(slicedEmail.length))

      return `${maskedName}@${maskedMail}`
    })

    let maskedEmail = fullText

    // changing the email that contained on fulltext into the masked email
    listEmail.forEach((email, i) => {
      maskedEmail = maskedEmail.split(listEmail[i]).join(newListEmail[i])
    })

    return maskedEmail
  }

  return fullText
}

/**
 * Masking `Phone number` to `*` (default)
 *
 * @param {String} fullText Words that contain `phone number`.
 * @param {String} replacement Masking replacement icon.
 * @returns {String} Returns the `fullText` but changed the `phoneNumber` into `replacement` if there is any `phoneNumber`.
 */
const maskingPhone = (fullText, replacement = '*') => {
  const regexPhone = /[+]*[(]?[+]?[0-9]{1,4}[)]?[-\s./0-9]*/gm
  const listPhone = fullText.match(regexPhone)

  if (listPhone && listPhone.length) {
    // new list of masked phone
    const newListPhone = listPhone.map(phone => {
      const slicedPhone = phone.slice(3, phone.length - 2)
      const maskedPhone = phone.replace(
        slicedPhone,
        replacement.repeat(slicedPhone.length)
      )

      return maskedPhone
    })

    let maskedPhone = fullText

    // changing the phonenumber that contained on fulltext into the masked phonenumber
    listPhone.forEach((phone, i) => {
      maskedPhone = maskedPhone.split(listPhone[i]).join(newListPhone[i])
    })

    return maskedPhone
  }

  return fullText
}

/**
 * Masking `Phone number and email` to `*` (default)
 *
 * @param {String} fullText Words that contain `phone number and email`.
 * @param {String} replacement Masking replacement icon.
 * @returns {String} Returns the `fullText` but changed the `phoneNumber and email` into `replacement` if there is any `phoneNumber and email`.
 */
const maskingEmailPhone = (fullText, replacement = '*') => {
  const maskedEmail = maskingEmail(fullText, replacement)
  return maskingPhone(maskedEmail, replacement)
}

module.exports = maskingEmailPhone
module.exports.maskingEmail = maskingEmail
module.exports.maskingPhone = maskingPhone
