//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (phrase) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let newString = phrase.replace(/[^a-zA-Z]/g, "").toLowerCase()
  let phraseArray = newString.split("")

  for(let letter of alphabet) {
    if (!phraseArray.includes(letter)) {
      return false
    } 
   }
  
   return true
};
