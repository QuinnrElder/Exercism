//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {
  let dnaArray = dnaString.split("")
  let rnaArray = dnaArray.map(codeLetter => {
    if(codeLetter === "C") {
      return codeLetter = "G"
    }
    else if (codeLetter === "G") {
      return codeLetter = "C"
    } else if (codeLetter === "T") {
      return codeLetter = "A"
    } else if (codeLetter === "A") {
      return codeLetter = "U"
    } else {
      return
    }
  })
  let rnaString = rnaArray.join("")
  return rnaString
}