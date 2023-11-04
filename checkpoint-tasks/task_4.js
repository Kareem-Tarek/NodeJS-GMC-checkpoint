//-------- generate-password package documentation => https://www.npmjs.com/package/generate-password --------//

const generatePassword = require('generate-password');

const generateRandomPassword = () => { // Note: Using ES6 arrow function
  const password = generatePassword.generate({
    length: 12,                      // Default length is 10 characters
    numbers: true,                   // Include numbers in the password
    symbols: true,                   // Include symbols in the password
    uppercase: false,                // Include uppercase letters in the password
    lowercase: true,                 // Include lowercase letters in the password
  });

  console.log(password);
}
/* 
Note: Without using ES6 arrow function (by using the standard js function syntax)
      "function generateRandomPassword() {....}"
*/
generateRandomPassword();