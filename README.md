# Word-Masking-Helper

A simple javascript helper for masking email and phone number

## Installation

```bash
npm install word-masking-helper
```

## Examples

```javascript
import emailPhoneMasking, { maskingEmail, maskingPhone } from 'word-masking-helper'

const description = `
Hi, my name Devin Ekadeni.
You can contact me by email:
- devinekadeni@example.com
- ekadeni.devin@example.co.id

Or you can contact me by phone:
- 08123456789
- +628123456789
- (021) - 5312345

Or you could call my manager at 09871234567 or vina@example.com
`

const maskedDescription = emailPhoneMasking(description)

console.log(maskedDescription)

/* Console Output
Hi, my name Devin Ekadeni.
You can contact me by email:
- d**********i@e*******com
- e***********n@e*********.id

Or you can contact me by phone:
- 081******89
- +62********89
- (02**********45

Or you could call my manager at 098*******7 or v**a@e*******com
*/

// You can also use `maskingEmail` or `maskingPhone` only
```

you can try the sandbox [here](https://codesandbox.io/s/vigorous-mclean-duhtm)
