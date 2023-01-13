// Generate random password
'use strict'

const GeneratePassword = (alphabet, passLength) => {
  const MAX = alphabet.length;
  password = '';
  for (let i = 0; i < passlength; i++) {
    Index = Math.floor(Math.random() * MAX);
    password = password + alphabet[Index];
  }
  return key;
};

require('../Tests/password.js')(GeneratePassword);
