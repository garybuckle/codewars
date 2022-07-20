/*
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text){
  let dupes =[]
  const dupeset = new Set()
  for (let i = 0; i < text.length; i++) {
    // console.log("outer loop", text[i])
    for (let index = i+1; index < text.length; index++) {
      // console.log("Inner Loop", text[index])
      if (text[i].toLowerCase() === text[index].toLowerCase()) {
        dupes.push(text[i])
        dupeset.add(text[i].toLowerCase)
      }
    }
  }
// count the dupes
const howManyDupes = dupeset.size
console.log(dupeset)
// create a set to contain single dupes
  console.log(`There are ${howManyDupes} duplicates`)
  return howManyDupes

}

duplicateCount("Indivisibility")