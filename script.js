// declare variables for character sets.

function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // prompt for password length, then check password length is a valid int.

  const length = parseInt(prompt('Enter password length between 8 and 128 characters:'));

  if (isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
    
  }

  // prompt for choosing character sets, then verify atleast one set is chosen.

  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('At least one character type must be selected.');
    return;

  }

  // check and append included character sets.

  let allChars = '';
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  // add digits 1 by 1 at random within included character sets until specified length is met.

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);

  }

  // send generated password to quieried css object #password

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

